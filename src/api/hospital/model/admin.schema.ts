import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
 {  
  email: { type: String, required: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  role: {
    type: String,
    enum: ["admin", "hospital"],
    default: "hospital",
  },
  hospital: { type: mongoose.Schema.Types.ObjectId, ref: "hospital" },
 },
 {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
 }
);

export const MongooseAdmin = mongoose.model("admin", adminSchema);