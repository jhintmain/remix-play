// src/routes/auth/login.tsx
import { Form, redirect, useActionData, useNavigation } from "react-router";
import type { ClientActionFunctionArgs } from "react-router";
import { setUser } from "~/auth";

export async function clientAction({ request }: ClientActionFunctionArgs) {
    const fd = await request.formData();
    const email = String(fd.get("email") || "").trim();
    const password = String(fd.get("password") || "");

    // 진짜라면 서버 요청/검증
    if (!email || !password) {
        return { error: "이메일/비밀번호를 입력하세요." };
    }

    // 성공 가정
    setUser({ email });
    return redirect("/dashboard");
}

export default function LoginPage() {
    const actionData = useActionData() as { error?: string } | undefined;
    const nav = useNavigation();

    return (
        <Form method="post" style={{ display: "grid", gap: 8, maxWidth: 360 }}>
            <input name="email" placeholder="email@example.com" />
            <input name="password" type="password" placeholder="••••••••" />
            <button disabled={nav.state === "submitting"}>
                {nav.state === "submitting" ? "로그인 중..." : "로그인"}
            </button>
            {actionData?.error && <p style={{ color: "red" }}>{actionData.error}</p>}
        </Form>
    );
}
