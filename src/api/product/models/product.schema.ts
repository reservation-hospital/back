import mongoose, { Schema, Document } from "mongoose";

interface IProduct extends Document {
  id: string;
  name: string;
  price: number;
  description: string;
}

const ProductSchema: Schema = new Schema(
  {
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

const mongooseProduct = mongoose.model<IProduct>("Product", ProductSchema);

export default mongooseProduct;
