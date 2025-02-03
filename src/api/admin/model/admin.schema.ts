import mongoose from "@/vendors/mongoose";

const AdminSchema = new mongoose.Schema<IAdmin>(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    hospitalName: { type: String, required: true },
    role: { type: String, enum: ["admin", "hospital"], default: "hospital" },
    hospital: {
      type: Object,
      default: null,
    },
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
    orders: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
      },
    ],
    selectProducts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SelectProduct",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const MongooseAdmin = mongoose.model<IAdmin>("Admin", AdminSchema);
