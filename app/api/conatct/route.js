export async function POST(req) {
  try {
    const body = await req.json();

    const data = {
      ...body,
      verifypass: process.env.VERIFYPASS,
      type: "content",
    };

    const res = await fetch(
      `https://devzaidbackend.onrender.com/api/connectus/contactform/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!res.ok) {
      return Response.json(
        { success: false, message: "Backend Error" },
        { status: 500 }
      );
    }

    return Response.json({ success: true });
  } catch (error) {
    return Response.json(
      { success: false, message: "Server Error" },
      { status: 500 }
    );
  }
}
