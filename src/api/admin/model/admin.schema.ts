import mongoose from "@/vendors/mongoose";

const AdminSchema = new mongoose.Schema<IAdmin>(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    role: { type: String, required: true, default: "hospital" },
    hospital: {
      name: { type: String },
      address: { type: String },
      latitude: { type: String },
      longitude: { type: String },
      businessNumber: { type: String },
      status: { type: String, default: "inactive" },
      product: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

export const MongooseAdmin = mongoose.model<IAdmin>("Admin", AdminSchema);
