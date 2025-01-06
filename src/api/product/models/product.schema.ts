import mongoose, { Schema, Document } from "mongoose";
import { v4 as uuidv4 } from "uuid";

interface IProduct extends Document {
    id: string;
    name: string;
    price: number;
    description: string;
    selective: string[];
    hospital: string;
}

const ProductSchema: Schema = new Schema(
    {
        id: { type: String, unique: true, default: uuidv4 },
        name: { type: String, required: true },
        price: { type: Number, required: true },
        description: { type: String, required: true },
        hospital: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Admin",
        },
        selective: { type: [String] },
    },
    { timestamps: true }
);

const mongooseProduct = mongoose.model<IProduct>("Product", ProductSchema);

export default mongooseProduct;
