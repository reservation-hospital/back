import { AdminRepository } from "@/api/admin/repository/admin.repository"
import { MongooseAdmin } from "@/api/admin/model/admin.schema"

export class MongooseAdminRepository implements AdminRepository {
    async signup(admin: Omit<IAdmin, "id">): Promise<IAdmin> {
        const newAdmin = new MongooseAdmin(admin);
        await newAdmin.save();
        return newAdmin;
    }
}