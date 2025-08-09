import express from "express";
import session from "express-session";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";
// ⬇️ v7 방식: 함수가 아니라 클래스(default export)
import RedisStore from "connect-redis";

import { createClient as createRedisClient } from "redis";
import { z } from "zod";

const prisma = new PrismaClient();
const app = express();
const port = 4000;

app.use(express.json());

// --- Redis 클라이언트 & 세션 스토어 (v7) ---
const redisUrl = process.env.REDIS_URL || "redis://127.0.0.1:6379";
const redisClient = createRedisClient({ url: redisUrl });

redisClient.on("error", (err) => {
    console.error("[Redis] Client Error:", err);
});


app.use(
    session({
        name: "sid",
        secret: process.env.SESSION_SECRET || "dev-secret",
        resave: false,
        saveUninitialized: false,
        store: new RedisStore({client: redisClient, prefix: "sess:"}),
        cookie: {
            httpOnly: false,
            sameSite: "lax",
            // prod: secure: true (HTTPS)
            maxAge: 1000 * 60 * 60 * 24 * 7,
        },
    })
);

const credSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
});


app.get("/", (req, res) => {
    res.json({message: "Hello, World!2"});
});

app.get("/api/me", (req, res) => {
    if (!req.session.user) return res.status(401).json({ user: null });
    res.json({ user: { email: req.session.user.email } });
});

app.post("/api/register", async (req, res) => {
    const pareds = credSchema.safeParse(req.body);
    if (!pareds.success) return res.status(400).json({error: "형식을 확인하세요."});
    const {email, password} = pareds.data;
    const hash = await bcrypt.hash(password, 12);

    try{
        await prisma.user.create({
            data: {
                email,
                passwordHash: hash,
            },
        });
        req.session.user = {email};
        res.json({ok: true});

    }catch(e){
        if (String(e.message).includes("Unique")){
            return res.status(400).json({error: "이미 존재하는 이메일입니다."});
        }
        console.error(e);
        res.status(500).json({error: "서버 오류입니다."});
    }

});

app.post("/api/login", async (req, res) => {
    const parsed = credSchema.safeParse(req.body);
    if (!parsed.success) return res.status(400).json({error: "형식을 확인하세요."});

    const {email, password} = parsed.data;

    const user = await prisma.user.findUnique({where: {email}});
    if(!user) {
        return res.status(400).json({error: "존재하지 않은 사용자입니다."});
    }

    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok) {
        return res.status(400).json({error: "비밀번호가 일치하지 않습니다."});
    }

    req.session.user = { email };
    res.json({ok:true});
});

app.post("/api/logout",(req,res)=>{
    req.session.destroy(()=>{
        res.clearCookie("sid");
        res.json({ok: true});
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})