import mongoose from "@/vendors/mongoose";
import { v4 as uuidv4 } from "uuid";

const ProductSchema = new mongoose.Schema<IProduct>(
  {
    id: { type: String, unique: true, default: uuidv4 },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    selective: { type: mongoose.Schema.Types.ObjectId, ref: "SelectProduct" },
    hospitalId: { type: mongoose.Schema.Types.Mixed, ref: "Admin" },
  },
  {
    timestamps: true,
  }
);

export const MongooseProduct = mongoose.model<IProduct>(
  "Product",
  ProductSchema
);
