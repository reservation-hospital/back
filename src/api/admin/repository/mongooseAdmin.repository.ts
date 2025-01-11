import { AdminRepository } from "@/api/admin/repository/admin.repository";
import { MongooseAdmin } from "@/api/admin/model/admin.schema";
import HttpException from "@/api/common/exceptions/http.exception";

export class MongooseAdminRepository implements AdminRepository {
  /** 회원가입(role = admin, hospital) */
  async save(admin: Omit<IAdmin, "id">): Promise<IAdmin> {
    const newAdmin = new MongooseAdmin(admin);
    await newAdmin.save();
    return newAdmin;
  }  

  /** 관리자 전체 조회(role = admin) */
  async findAll(): Promise<IAdmin[]> {
    const admins = await MongooseAdmin.find().exec();
    return admins;
  }

  /** 관리자 조회(role = admin) */
  async findById(id: string): Promise<IAdmin | null> {
    const admin = await MongooseAdmin.findById(id);
    if (!admin) {
      throw new HttpException(404, "해당 관리자를 찾을 수 없습니다.");
    }
    return admin;
  }

  /** 관리자 수정(role = admin) */
  async update(id: string, updateAdminInfo: IAdmin): Promise<void> {
    await MongooseAdmin.findByIdAndUpdate(id, updateAdminInfo, {
      new: true,
    });

    return;
  }

  /** 관리자 삭제(role = admin) */
  async delete(id: string): Promise<void> {
    await MongooseAdmin.deleteOne({ _id: id });
    return;
  }

  async findByEmail(email: string): Promise<IAdmin | null> {
    const findAdmin = await MongooseAdmin.findOne({email});        
    return findAdmin ?? null;
  }
}
