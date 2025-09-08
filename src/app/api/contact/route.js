import { connectDB } from "@/lib/mongodb";
import Contact from "@/models/contact";

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();

    const newContact = await Contact.create(body);

    return new Response(JSON.stringify({ success: true, data: newContact }), {
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
