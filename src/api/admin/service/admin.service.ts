import HttpException from "@/api/common/exceptions/http.exception";
import { AdminService } from "@/api/admin/service/admin.service.type";
import { MongooseAdminRepository } from "../repository/mongooseAdmin.repository";
import bcrypt from "bcryptjs";

export class AdminServiceImpl implements AdminService {
  constructor(
    private readonly _mongooseAdminRepository: MongooseAdminRepository
  ) {}
  async signUp(admin: IAdmin): Promise<IAdmin> {
    const saltedPassword = await bcrypt.hash(admin.password, 12);
    if (saltedPassword === undefined || saltedPassword === null) {
      console.error("비밀번호 암호화 실패");
      throw new HttpException(500, "비밀번호 암호화 실패");
    }

    const newAdmin = await this._mongooseAdminRepository.signup({
      ...admin,
      password: saltedPassword,
      role: "hospital",
    });
    return newAdmin;
  }

  async login(email: string, password: string): Promise<IAdmin> {
    const admin = await this._mongooseAdminRepository.login(email);
    console.log(admin);
    if (!admin) {
      throw new HttpException(401, "해당 유저는 존재하지 않습니다.");
    }

    const isPasswordMatch = await bcrypt.compare(password, admin.password);
    console.log(isPasswordMatch);
    if (!isPasswordMatch) {
      throw new HttpException(401, "비밀번호가 일치하지 않습니다.");
    }
    return admin;
  }
  async logout(id: string): Promise<void> {
    await this._mongooseAdminRepository.logout(id);
    return;
  }
  async getAdmins(): Promise<IAdmin[]> {
    const admins = await this._mongooseAdminRepository.getAdmins();
    return admins;
  }
  async getAdmin(id: string): Promise<IAdmin> {
    const admin = await this._mongooseAdminRepository.getAdmin(id);
    if (!admin) {
      throw new HttpException(404, "해당 유저는 존재하지 않습니다.");
    }
    return admin;
  }
  async updateAdmin(id: string, admin: IAdmin): Promise<IAdmin> {
    const updatedAdmin = await this._mongooseAdminRepository.updateAdmin(
      id,
      admin
    );
    if (!updatedAdmin) {
      throw new HttpException(404, "해당 유저는 존재하지 않습니다.");
    }
    return updatedAdmin;
  }
  async deleteAdmin(id: string): Promise<void> {
    const admin = await this._mongooseAdminRepository.getAdmin(id);
    if (!admin) {
      throw new HttpException(404, "해당 유저는 존재하지 않습니다.");
    }
    await this._mongooseAdminRepository.deleteAdmin(id);
    return;
  }
  async getHospital(id: string): Promise<IAdmin> {
    const hospital = await this._mongooseAdminRepository.getHospital(id);
    return hospital;
  }
  async updateHospital(id: string, admin: IAdmin): Promise<IAdmin> {
    const updatedHospital = await this._mongooseAdminRepository.updateHospital(
      id,
      admin
    );
    return updatedHospital;
  }
  async deleteHospital(id: string): Promise<void> {
    await this._mongooseAdminRepository.deleteHospital(id);
    return;
  }
}
