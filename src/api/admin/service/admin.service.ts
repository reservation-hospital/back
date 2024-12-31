import HttpException from "@/api/common/exceptions/http.exception";
import { AdminService } from "@/api/admin/service/admin.service.type";
import { AdminRepository } from "@/api/admin/repository/admin.repository";
import bcrypt from "bcryptjs";

export class AdminServiceImpl implements AdminService {
  constructor(
    private readonly _adminRepository: AdminRepository
  ) {}

  /** 회원가입(role = admin, hospital) */
  async signUp(admin: Omit<IAdmin, "id">): Promise<IAdmin> {
    const saltedPassword = await bcrypt.hash(admin.password, 12);
    if (saltedPassword === undefined || saltedPassword === null) {
      console.error("비밀번호 암호화 실패");
      throw new HttpException(500, "비밀번호 암호화 실패");
    }

    const newAdmin = await this._adminRepository.signup({
      ...admin,
      password: saltedPassword,
      role: "hospital",
    });
    return newAdmin;
  }  

  /** 관리자 전체 조회(role = admin) */
  async getAdmins(): Promise<IAdmin[]> {
    const admins = await this._adminRepository.getAdmins();
    return admins;
  }

  /** 관리자 조회(role = admin) */
  async getAdmin(id: string): Promise<IAdmin> {
    const admin = await this._adminRepository.getAdmin(id);
    if (!admin) {
      throw new HttpException(404, "해당 유저는 존재하지 않습니다.");
    }
    return admin;
  }

  /** 관리자 수정(role = admin) */
  async updateAdmin(id: string, params: Partial<Omit<IAdmin, "id" | "order">>): Promise<void> {
    const findAdmin = await this._adminRepository.findById(id);

    if (!findAdmin) {
      throw new HttpException(404, "해당 유저는 존재하지 않습니다.");
    }

    const updatedAdmin = await this._adminRepository.updateAdmin(id, {...params});

    return updatedAdmin;
  }

  /** 관리자 삭제(role = admin) */
  async deleteAdmin(id: string): Promise<void> {
    const admin = await this._adminRepository.findById(id);
    if (!admin) {
      throw new HttpException(404, "해당 유저는 존재하지 않습니다.");
    }
    await this._adminRepository.deleteAdmin(id);
    return;
  }

  /** 병원 목록 조회(role = admin) */
  async getHospitals(): Promise<IHospital[]> {
    const hospitals = await this._adminRepository.getHospitals();
    return hospitals;
  }

  /** 병원 수정(role = hospital) */
  async updateHospital(id: string, hospital: IHospital): Promise<void> {
    const findHospital = await this._adminRepository.findById(id);

    if (!findHospital) throw new HttpException(404, "병원을 찾을 수 없습니다.");

    const updatedHospital = await this._adminRepository.updateHospital(
      id,
      hospital
    );

    return updatedHospital;
  }

  /** 병원 삭제(role = hospital) */
  async deleteHospital(id: string): Promise<void> {
    await this._adminRepository.deleteHospital(id);
    return;
  }

  /** 병원 상세 조회(role = hospital) */
  async getHospital(id: string): Promise<IHospital> {
    const hospital = await this._adminRepository.getHospital(id);
    if (!hospital) {
      throw new HttpException(404, "병원을 찾을 수 없습니다.");
    }
    return hospital;
  }
  
}
