import mongoose, { Schema, Document } from "mongoose";

interface IProduct extends Document {
  id: string;
  name: string;
  price: number;
  description: string;
  selective: string[];
}

const ProductSchema: Schema = new Schema(
  {
    id: { type: String, unique: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    selective: { type: [String] },
  },
  { timestamps: true }
);

const mongooseProduct = mongoose.model<IProduct>("Product", ProductSchema);

export default mongooseProduct;
