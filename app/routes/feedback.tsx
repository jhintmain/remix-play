import {type ActionFunctionArgs} from "@remix-run/node";
import {useFetcher, useLoaderData} from "@remix-run/react";
import {jsonResponse} from "~/utils/response.server";

let messages: string[] = [
    "Remix 시작해보자",
    "미뤘던 ts도 공부도",
]

// loader
export async function loader() {
    return jsonResponse({feedbacks: messages});
}

// action
export async function action({request}: ActionFunctionArgs) {
    const formData = await request.formData();
    const message = formData.get('message');

    if (typeof message === 'string') {
        messages.push(message);
    }
    console.log("receive feedback : ", message);
    return jsonResponse({ok: true});
}

// page
export default function FeedbackPage() {
    const {feedbacks} = useLoaderData<typeof loader>();
    const fetcher = useFetcher();

    return (
        <div className="p-6">
            <h1 className="text-xl font-bold mb-4">📢 피드백 남기기</h1>

            <fetcher.Form method="post">
                <input
                    type="text"
                    name="message"
                    placeholder="메시지를 입력하세요"
                    className="border px-3 py-2 mr-2"
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    제출
                </button>
            </fetcher.Form>

            <hr className="my-6"/>
            <h2 className="text-lg font-semibold">💬 기존 피드백</h2>
            <ul className="list-disc ml-6 mt-2">
                {/* 새 메시지 존재시 화면 즉시 변경 */}
                {[...feedbacks, ...(fetcher.formData
                    ? [fetcher.formData.get('message') as string]
                    : [])].map((msg,idx)=>(
                        <li key={idx}>{msg}</li>
                ))
                }
            </ul>
        </div>
    );
}