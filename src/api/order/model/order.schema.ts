import mongoose from "@/vendors/mongoose";

const orderSchema = new mongoose.Schema(
  {
    user_name: { type: String, required: true },
    user_tell: { type: String, required: true },
    user_birth: { type: String, required: true },
    user_address: {
      zipcode: { type: String, required: true },
      basic: { type: String, required: true },
      detail: { type: String, required: true },
    },
    user_gender: { type: String, required: true },
    user_email: { type: String, required: true },
    memo: { type: String },
    reservation_date: { type: Date, required: true },
    reservation_time: { type: String, required: true },
    status: {
      type: String,
      enum: ["pending", "success", "cancel"],
      default: "pending",
    },

    total_price: { type: Number, required: true },
    // productId: { type: String },
    // hospitalId: { type: String },
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
    hospitalId: { type: mongoose.Schema.Types.ObjectId, ref: "Admin" },
    select_product: [
      { type: mongoose.Schema.Types.ObjectId, ref: "SelectProduct" },
    ],
    // hospital: { type: mongoose.Schema.Types.ObjectId, ref: "Hospital" },
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

export const MongooseOrder = mongoose.model<IOrder>("Order", orderSchema);
