"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongooseAdmin = void 0;
const mongoose_1 = __importDefault(require("@/vendors/mongoose"));
const AdminSchema = new mongoose_1.default.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    role: { type: String, enum: ["admin", "hospital"], default: "hospital" },
    hospital: {
        type: Object,
        default: null,
    },
    products: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "Product",
        },
    ],
    orders: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "Order",
        },
    ],
    selectProducts: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "SelectProduct",
        },
    ],
}, {
    timestamps: true,
});
exports.MongooseAdmin = mongoose_1.default.model("Admin", AdminSchema);
//# sourceMappingURL=admin.schema.js.map