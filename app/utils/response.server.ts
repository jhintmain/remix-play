export function jsonResponse<T>(data: T, status: number = 200): Response {
    return new Response(JSON.stringify(data), {
        status,
        headers: {
            "Content-Type": "application/json",
        },
    });
}
export function errorResponse(message: string, status: number = 400): Response {
    return jsonResponse({ result: false, error: message }, status);
}