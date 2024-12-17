import { AdminRepository } from "@/api/admin/repository/admin.repository";
import { MongooseAdmin } from "@/api/admin/model/admin.schema";
import HttpException from "@/api/common/exceptions/http.exception";

export class MongooseAdminRepository implements AdminRepository {
  async signup(admin: Omit<IAdmin, "id">): Promise<IAdmin> {
    const newAdmin = new MongooseAdmin(admin);
    await newAdmin.save();
    return newAdmin;
  }
  async login(email: string): Promise<IAdmin> {
    const admin = await MongooseAdmin.findOne({ email });
    if (!admin) {
      throw new HttpException(404, "해당 유저를 찾을 수 없습니다.");
    }
    return admin;
  }
  async logout(id: string): Promise<void> {
    const admin = await MongooseAdmin.findById(id);
    if (!admin) {
      throw new HttpException(404, "해당 유저를 찾을 수 없습니다.");
    }
    // 로그아웃 수정
    return;
  }
  async getAdmins(): Promise<IAdmin[]> {
    const admins = await MongooseAdmin.find();
    return admins;
  }

  async getAdmin(id: string): Promise<IAdmin> {
    const admin = await MongooseAdmin.findById(id);
    if (!admin) {
      throw new HttpException(404, "해당 유저를 찾을 수 없습니다.");
    }
    return admin;
  }
  async updateAdmin(id: string, admin: IAdmin): Promise<IAdmin> {
    const updatedAdmin = await MongooseAdmin.findByIdAndUpdate(id, admin, {
      new: true,
    });
    if (!updatedAdmin) {
      throw new HttpException(404, "해당 유저를 찾을 수 없습니다.");
    }
    return updatedAdmin;
  }
  async deleteAdmin(id: string): Promise<void> {
    const deletedAdmin = await MongooseAdmin.findByIdAndDelete(id);
    if (!deletedAdmin) {
      throw new HttpException(404, "해당 유저를 찾을 수 없습니다.");
    }
    return;
  }
  async getHospital(id: string): Promise<IAdmin> {
    const hospital = await MongooseAdmin.findById(id);
    if (!hospital) {
      throw new HttpException(404, "해당 유저를 찾을 수 없습니다.");
    }
    return hospital;
  }
  async updateHospital(id: string, admin: IAdmin): Promise<IAdmin> {
    const updateHospital = await MongooseAdmin.findByIdAndUpdate(id, admin, {
      new: true,
    });
    if (!updateHospital) {
      throw new HttpException(404, "해당 유저를 찾을 수 없습니다.");
    }
    return updateHospital;
  }
  async deleteHospital(id: string): Promise<void> {
    const deletedHospital = await MongooseAdmin.findByIdAndDelete(id);
    if (!deletedHospital) {
      throw new HttpException(404, "해당 유저를 찾을 수 없습니다.");
    }
    return;
  }
}
