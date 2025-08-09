import {type ClientLoaderFunctionArgs, Form, redirect, useLoaderData, useNavigation} from "react-router";
import {authUser, clearUser} from "~/auth";


export async function clientLoader(_: ClientLoaderFunctionArgs) {
    try {
        const user = authUser();
        return {user};
    } catch (e) {
        return redirect("/login");
    }
}

export async function clientAction({request}: ClientLoaderFunctionArgs) {
    const data = await request.formData();
    const intent = String(data.get("_intent") || "").trim();
    if (intent === "logout") {
        clearUser();
        return redirect("/login");
    }
    return null;
}


export default function Dashboard() {
    const {user} = useLoaderData() as { user: { email: string } };
    const nav = useNavigation();

    return (
        <div style={{display: "grid", gap: 12}}>
            <h2>대시보드</h2>
            <p>안녕하세요, <b>{user.email}</b> 님!</p>

            <Form method="post">
                <input type="hidden" name="_intent" value="logout"/>
                <button disabled={nav.state === "submitting"}>
                    {nav.state === "submitting" ? "로그아웃 중..." : "로그아웃"}
                </button>
            </Form>
        </div>
    );
}