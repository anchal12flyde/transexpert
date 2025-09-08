import { connectDB } from "@/lib/mongodb";
import qoute from "@/models/qoute";

export async function POST(req) {
  try {
    await connectDB();
    console.log("Mongo DB connected");
    const body = await req.json();

    const newQuote = await qoute.create(body);

    return new Response(JSON.stringify({ success: true, data: newQuote }), {
      status: 201,
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ success: false, error: err.message }),
      {
        status: 500,
      }
    );
  }
}
