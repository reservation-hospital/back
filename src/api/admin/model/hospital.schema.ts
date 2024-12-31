import mongoose from "@/vendors/mongoose";

const HospitalSchema = new mongoose.Schema<IHospital>(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    address: { type: String, required: true },
    latitude: { type: String, required: true },
    longitude: { type: String, required: true },
    businessNumber: { type: String, required: true },
    status: { type: String, enum: ["active", "inactive"], default: "inactive" },
    role: { type: String, enum: ["admin", "hospital"], default: "hospital" },
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

export const MongooseHospital = mongoose.model<IHospital>("Hospital", HospitalSchema);