import mongoose from "@/vendors/mongoose";

const AdminSchema = new mongoose.Schema<IAdmin>(
 {
  password: { type: String, required: true },
  name: { type: String, required: true },
 },
 {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
 }
);

export const MongooseAdmin = mongoose.model<IAdmin>("Admin", AdminSchema);