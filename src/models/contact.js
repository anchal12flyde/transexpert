import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String },
    email: { type: String, required: true },
    phone: { type: String },
    subject: { type: String }, // General Inquiry / Enterprise Sales / Carrier Partnership / Careers
    message: { type: String },
  },
  { timestamps: true, collection: "contact" }
);

export default mongoose.models.Contact ||
  mongoose.model("Contact", ContactSchema);
