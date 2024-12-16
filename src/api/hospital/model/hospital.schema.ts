import mongoose from "@/vendors/mongoose";

const hospitalSchema = new mongoose.Schema(
  {
    // 몽고DB에 들어가는 것들은 대문자로 작성
    name: { type: String, required: true  },
    email: { type: String, required: true },
    password: { type: String },
    address: { type: String, required: true  },
    phone: { type: String, required: true  },
    website: { type: String },
    thumbnail: { type: String },
    latitude: { type: String, required: true  },
    longitude: { type: String, required: true  },
    description: { type: String, required: true  },
    status: { type: String, enum: ["ACTIVE", "INACTIVE"], default: "INACTIVE" },
    // 제품 목록 가져올 때는 type: mongoose.Schema.Types.ObjectId으로 가져오고, ref는 "Product"로 연결
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
 }
);

export const MongooseHospital = mongoose.model<IHospital>("hospitals", hospitalSchema);