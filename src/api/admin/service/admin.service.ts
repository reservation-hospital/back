import HttpException from "@/api/common/exceptions/http.exception";
import { AdminService } from "@/api/admin/service/admin.service.type";
import { AdminRepository } from "@/api/admin/repository/admin.repository";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";

export class AdminServiceImpl implements AdminService {
  constructor(private readonly _adminRepository: AdminRepository) {}

  /** 회원가입(role = admin, hospital) */
  async signUp(params: Omit<IAdmin, "id" | "role">): Promise<IAdmin> {
    try {
      const findAdmin = await this._adminRepository.findByEmail(params.email);

      if (findAdmin) {
        throw new HttpException(409, "이미 존재하는 이메일입니다.");
      }

      const salt = await bcrypt.genSalt(10);
      const saltedPassword = await bcrypt.hash(params.password, salt);

      const newAdmin = await this._adminRepository.save({
        ...params,
        password: saltedPassword,
        role: "hospital",
      });
      console.log(newAdmin);

      return newAdmin;
    } catch (error) {
      throw error;
    }
  }

  /** 관리자 전체 조회(role = admin) */
  async getAdmins(): Promise<IAdmin[]> {
    const admins = await this._adminRepository.findAll();
    return admins;
  }

  /** 관리자 조회(role = admin) */
  async getAdmin(id: string): Promise<IAdmin> {
    const admin = await this._adminRepository.findById(id);
    if (!admin) {
      throw new HttpException(404, "해당 관리자는 존재하지 않습니다.");
    }
    return admin;
  }

  /** 관리자 수정(role = admin) */
  async updateAdmin(
    id: string,
    params: Partial<Omit<IAdmin, "id" | "order">>
  ): Promise<void> {
    const findAdmin = await this._adminRepository.findById(id);
    console.log(findAdmin);
    if (!findAdmin) {
      throw new HttpException(404, "해당 관리자는 존재하지 않습니다.");
    }

    const updatedAdmin = await this._adminRepository.update(id, {
      ...params,
    });

    return updatedAdmin;
  }

  /** 관리자 삭제(role = admin) */
  async deleteAdmin(id: string): Promise<void> {
    const admin = await this._adminRepository.findById(id);
    if (!admin) {
      throw new HttpException(404, "해당 관리자는 존재하지 않습니다.");
    }
    await this._adminRepository.delete(id);
    return;
  }

  async userGetAdmin(id: string): Promise<IAdmin> {
    const admin = await this._adminRepository.findById(id);
    if (!admin) {
      throw new HttpException(404, "해당 관리자는 존재하지 않습니다.");
    }
    return admin;
  }
}
