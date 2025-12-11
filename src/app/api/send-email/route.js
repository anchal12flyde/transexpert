import { Resend } from "resend";
import fs from "fs";
import path from "path";

const resend = new Resend(process.env.RESEND_API_KEY);
const safe = (v) => (v ? v : "");



export async function POST(req) {
    try {
      console.log("RESEND KEY:", process.env.RESEND_API_KEY ? "Loaded ✔" : "NOT LOADED ❌");
    const body = await req.json();
    const { email } = body;

    if (!email) {
      return Response.json({ success: false, error: "Email is required" }, { status: 400 });
    }

    console.log("received email:", email);

    // Read HTML Template
    const templatePath = path.join(process.cwd(), "template", "contactConfirmation.html");
    let htmlTemplate = fs.readFileSync(templatePath, "utf8");

    // Replace placeholders
    htmlTemplate = htmlTemplate
  .replace("{{name}}", safe(body.name || `${body.firstName} ${body.lastName}`))
  .replace("{{company}}", safe(body.company))
  .replace("{{email}}", safe(body.email))
  .replace("{{phone}}", safe(body.phone))
  .replace("{{inquiryType}}", safe(body.inquiryType))
  .replace("{{message}}", safe(body.message))
  .replace("{{subject}}", safe(body.subject));


    // Send Email using Resend
    const data = await resend.emails.send({
      from: "Resend <onboarding@resend.dev>",
      to: "abhishek@flyde.in",
      subject: "New Form Submission",
      html: htmlTemplate,
    });

    console.log("Email sent successfully!", email);

    return Response.json({ success: true, data });
  } catch (err) {
    console.log("Error sending email:", err);
    return Response.json({ success: false, error: err.message }, { status: 500 });
  }
}
