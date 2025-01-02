import { AdminRepository } from "@/api/admin/repository/admin.repository";
import { MongooseAdmin } from "@/api/admin/model/admin.schema";
import HttpException from "@/api/common/exceptions/http.exception";
import { MongooseHospital } from "@/api/admin/model/hospital.schema";

export class MongooseAdminRepository implements AdminRepository {
  /** 회원가입(role = admin, hospital) */
  async signup(admin: Omit<IAdmin, "id">): Promise<IAdmin> {
    const newAdmin = new MongooseAdmin(admin);
    await newAdmin.save();
    return newAdmin;
  }  

  /** 관리자 전체 조회(role = admin) */
  async getAdmins(): Promise<IAdmin[]> {
    const admins = await MongooseAdmin.find({role:'admin'}).exec();
    return admins;
  }

  /** 관리자 조회(role = admin) */
  async getAdmin(id: string): Promise<IAdmin> {
    const admin = await MongooseAdmin.findById(id);
    if (!admin) {
      throw new HttpException(404, "해당 관리자를 찾을 수 없습니다.");
    }
    return admin;
  }

  /** 관리자 수정(role = admin) */
  async updateAdmin(id: string, updateAdminInfo: IAdmin): Promise<void> {
    await MongooseAdmin.findByIdAndUpdate(id, updateAdminInfo, {
      new: true,
    });

    return;
  }

  /** 관리자 삭제(role = admin) */
  async deleteAdmin(id: string): Promise<void> {
    const deletedAdmin = await MongooseAdmin.findByIdAndDelete(id);
    if (!deletedAdmin) {
      throw new HttpException(404, "해당 관리자를 찾을 수 없습니다.");
    }
    return;
  }

  async findById(id: string): Promise<IAdmin | null> {
    try {
      
      const admin = await MongooseAdmin.findById(id)
        .populate({ path: "admin" })
        .exec();

      return admin ?? null;

    } catch (error: any) {
      const message = error.message.toString();
  
      if (message.includes("Cast to ObjectId failed")) {
        return null;
      }

      throw error;
    }
  }

  async findByEmail(email: string): Promise<IAdmin | null> {
    // const findAdmin = await MongooseAdmin.findOne({email});
    // return findAdmin ?? null;

    try {
      
      const admin = await MongooseAdmin.findOne({email});
        
      return admin ?? null;
      
    } catch (error: any) {
      const message = error.message.toString();
  
      if (message.includes("Cast to ObjectId failed")) {
        return null;
      }

      throw error;
    }
  }
}
