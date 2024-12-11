import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    website: { type: String },
    thumbnail: { type: String },
    latitude: { type: String, required: true },
    longitude: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, enum: ["ACTIVE", "INACTIVE"], default: "INACTIVE" },
  },
  { timestamps: true }
);

export const mongooseHospital = mongoose.model("hospital", hospitalSchema);
