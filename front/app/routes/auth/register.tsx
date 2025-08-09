import {type ClientActionFunctionArgs, Form, redirect, useActionData, useNavigation,} from "react-router";
import {setUser} from "~/auth";

export async function clientAction({request}: ClientActionFunctionArgs) {
   const data = await request.formData();
   const email = String(data.get("email") || "").trim();
    const password = String(data.get("password") || "").trim();
    const confirmPassword = String(data.get("confirm") || "").trim();

    if (!email || !password || !confirmPassword) {
        return { error: "모든 필드를 입력하세요." };
    }
    if (password !== confirmPassword) {
        return { error: "비밀번호가 일치하지 않습니다." };
    }

    setUser({ email });
    return redirect("/dashboard");
}

export default function RegisterPage() {
    const actionData = useActionData() as { error?: string } | undefined;
    const nav = useNavigation();

    return (
        <Form method="post" style={{ display: "grid", gap: 8, maxWidth: 360 }}>
            <input name="email" placeholder="email@example.com" />
            <input name="password" type="password" placeholder="비밀번호" />
            <input name="confirm" type="password" placeholder="비밀번호 확인" />
            <button disabled={nav.state === "submitting"}>
                {nav.state === "submitting" ? "가입 중..." : "가입"}
            </button>
            {actionData?.error && <p style={{ color: "red" }}>{actionData.error}</p>}
        </Form>
    );
}