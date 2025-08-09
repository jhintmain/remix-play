import { type RouteConfig, index,layout,route} from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    // 회원 가입 예제
    layout("./routes/auth/layout.tsx", [
        route("login", "./routes/auth/login.tsx"),
        route("register", "./routes/auth/register.tsx"),
    ]),

    route("dashboard", "./routes/dashboard.tsx"),
] satisfies RouteConfig;
