import mongoose from "@/vendors/mongoose";

const selectProductSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        price: { type: Number, required: true },
        description: { type: String, required: true },
        admin: [
            {
              type: mongoose.Schema.Types.ObjectId,
              ref: "Admin"
            },
          ],
    },
    {
        timestamps: {
          createdAt: "createdAt",
          updatedAt: "updatedAt",
        },
    }
);

export const MongooseSelectProduct = mongoose.model<ISelectProduct>("SelectProduct", selectProductSchema);