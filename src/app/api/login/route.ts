export async function POST(request: Request) {
  try {
    const req = await request.json();
    console.log(22222, req, request.url);
    console.log("req.url:", request.url);
    console.log("req.method:", request.method);

    console.log("req.body:", request.body);
    // Process the webhook payload
  } catch (error: any) {
    return new Response(`Webhook error: ${error.message}`, {
      status: 400,
    });
  }

  const userInfo = {
    name: "zzt",
    age: 18,
    token: "aabbcc",
  };

  return Response.json(userInfo);
}
