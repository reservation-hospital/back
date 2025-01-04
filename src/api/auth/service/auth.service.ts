import bcrypt from 'bcryptjs';
import { AuthService } from "@/api/auth/service/auth.service.type";
import { AdminRepository } from "@/api/admin/repository/admin.repository";
import { HospitalRepository } from '@/api/admin/repository/hospital.repository';
import HttpException from "@/api/common/exceptions/http.exception";
import { JwtService } from "@/api/common/services/jwt.service";

export class AuthServiceImpl implements AuthService {
  private readonly _adminRepository: AdminRepository;
  private readonly _hospitalRepository: HospitalRepository;
  constructor(adminRepository: AdminRepository, hospitalRepository: HospitalRepository) {
    this._adminRepository = adminRepository;
    this._hospitalRepository = hospitalRepository;
  }
  
  async login(email: string, password: string): Promise<string> {
    let findEmail = await this._adminRepository.findByEmail(email);

    if(!findEmail) {
      findEmail = await this._hospitalRepository.findByEmail(email);
    }

    if (!findEmail) {
      console.log("존재하지 않는 회원입니다.")
      throw new HttpException(404, "존재하지 않는 회원입니다.");
    }    

    const plainPassword = password;
    
    const isSamePassword = await bcrypt.compare(plainPassword, findEmail.password);

    if (!isSamePassword) {
      throw new HttpException(401, "비밀번호가 일치하지 않습니다.");
    }

    const accessToken = JwtService.generateAccessToken({
      email: findEmail.email,
      role: findEmail.role,
      // 유효기간 1시간
      expiresIn: "1h",
    });

    return accessToken;
  }

  async logout(): Promise<void> {}

}