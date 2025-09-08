import mongoose from "mongoose";

const QuoteSchema = new mongoose.Schema(
  {
    fullName: String,
    companyName: String,
    email: String,
    phone: String,
    pickupLocation: String,
    deliveryLocation: String,
    shipmentType: String,
    loadType: String,
    weight: String,
    pickupDate: Date,
    deliveryDate: Date,
    frequency: String,
    notes: String,
  },
  { timestamps: true, collection: "qoute" }
);

export default mongoose.models.Quote || mongoose.model("Quote", QuoteSchema);
