import mongoose from "@/vendors/mongoose";

const orderSchema = new mongoose.Schema(
    {
        user_name: { type: String, required: true },
        user_tell: { type: String, required: true },
        user_birth: { type: String, required: true },
        user_address: { type: String, required: true },
        user_gender: { type: String, required: true },
        user_email: { type: String, required: true },
        total_price: { type: Number, required: true },
        memo: { type: String },
        reservation_date: { type: Date, required: true },
        reservation_time: { type: String, required: true },
        status: { type: String, enum: ["pending", "success", "cancel"], default: "pending" },
        hospitalId: { type: String },
        hospital: { type: mongoose.Schema.Types.ObjectId, ref: "Hospital" },
        product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        select_product: [{ type: mongoose.Schema.Types.ObjectId, ref: "SelectProduct" }],
    },
    {
        timestamps: {
          createdAt: "createdAt",
          updatedAt: "updatedAt",
        },
    }
);

export const MongooseOrder = mongoose.model<IOrder>("Order", orderSchema);