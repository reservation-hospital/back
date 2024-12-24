import mongoose from "@/vendors/mongoose";

const AdminSchema = new mongoose.Schema<IAdmin>(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    role: { type: String, enum: ["admin", "hospital"], default: "admin" },
    hospital: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hospital"
    },
    order: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order"
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const MongooseAdmin = mongoose.model<IAdmin>("Admin", AdminSchema);
