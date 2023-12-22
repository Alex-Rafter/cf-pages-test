export function onRequest(context) {
    const obj = {msg : "Its a mesage to you rudy!"}
    return new Response(JSON.stringify(obj))
}