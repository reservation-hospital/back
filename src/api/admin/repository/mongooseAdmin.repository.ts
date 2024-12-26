import { AdminRepository } from "@/api/admin/repository/admin.repository";
import { MongooseAdmin } from "@/api/admin/model/admin.schema";
import { MongooseHospital } from "@/api/admin/model/hospital.schema";
import HttpException from "@/api/common/exceptions/http.exception";

export class MongooseAdminRepository implements AdminRepository {
  /** 회원가입(role = admin, hospital) */
  async signup(admin: Omit<IAdmin, "id">): Promise<IAdmin> {
    const newAdmin = new MongooseAdmin(admin);
    await newAdmin.save();
    return newAdmin;
  }  

  /** 관리자 전체 조회(role = admin) */
  async getAdmins(): Promise<IAdmin[]> {
    const admins = await MongooseAdmin.find().exec();
    return admins;
  }

  /** 관리자 조회(role = admin) */
  async getAdmin(id: string): Promise<IAdmin> {
    const admin = await MongooseAdmin.findById(id);
    if (!admin) {
      throw new HttpException(404, "해당 유저를 찾을 수 없습니다.");
    }
    return admin;
  }

  /** 관리자 수정(role = admin) */
  async updateAdmin(id: string, admin: IAdmin): Promise<void> {
    const updatedAdmin = await MongooseAdmin.findByIdAndUpdate(id, admin, {
      new: true,
    });
    if (!updatedAdmin) {
      throw new HttpException(404, "해당 유저를 찾을 수 없습니다.");
    }
    return;
  }

  /** 관리자 삭제(role = admin) */
  async deleteAdmin(id: string): Promise<void> {
    const deletedAdmin = await MongooseAdmin.findByIdAndDelete(id);
    if (!deletedAdmin) {
      throw new HttpException(404, "해당 유저를 찾을 수 없습니다.");
    }
    return;
  }

  /** 병원 목록 조회(role = admin) */
  async getHospitals(): Promise<IHospital[]> {
    const admins = await MongooseHospital.find().exec();
    return admins;
  }
  
  /** 병원 수정(role = hospital) */
  async updateHospital(id: string, admin: IAdmin): Promise<IAdmin> {
    const updateHospital = await MongooseAdmin.findByIdAndUpdate(id, admin, {
      new: true,
    });
    if (!updateHospital) {
      throw new HttpException(404, "해당 유저를 찾을 수 없습니다.");
    }
    return updateHospital;
  }

  /** 병원 삭제(role = hospital) */
  async deleteHospital(id: string): Promise<void> {
    const deletedHospital = await MongooseAdmin.findByIdAndDelete(id);
    if (!deletedHospital) {
      throw new HttpException(404, "해당 유저를 찾을 수 없습니다.");
    }
    return;
  }
  
  /** 병원 상세 조회(role = hospital) */
  async getHospital(id: string): Promise<IAdmin> {
    const hospital = await MongooseAdmin.findById(id);
    if (!hospital) {
      throw new HttpException(404, "해당 유저를 찾을 수 없습니다.");
    }
    return hospital;
  }

  async findById(adminId: string): Promise<IAdmin | null> {
    try {
      const fullAdmin = await MongooseAdmin.findById(adminId)
        .populate({
          path: "order"
        })
        .exec();
      return fullAdmin;
    } catch (error: any) {
      const message = error.message.toString();
      if (message.includes("Cast to ObjectId failed")) {
        return null;
      }

      throw error;
    }
  }

  async findByEmail(email: string): Promise<IAdmin | null> {
    const findAdmin = await MongooseAdmin.findOne({email});

    return findAdmin ?? null;
  }
}