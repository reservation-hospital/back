import bcrypt from 'bcryptjs';
import { AuthService } from "@/api/auth/service/auth.service.type";
import { AdminRepository } from "@/api/admin/repository/admin.repository";
import HttpException from "@/api/common/exceptions/http.exception";
import { JwtService } from "@/api/common/services/jwt.service";

export class AuthServiceImpl implements AuthService {
  private readonly _adminRepository: AdminRepository;
  constructor(adminRepository: AdminRepository) {
    this._adminRepository = adminRepository;
  }

  async signup(params: Omit<IAdmin, "id" | "role">): Promise<IAdmin> {
    try {
      const findAdmin = await this._adminRepository.findByEmail(params.email);
      
      if (findAdmin) {
        throw new HttpException(409, "이미 존재하는 이메일입니다.");
      }

      const saltedPassword = await bcrypt.hash(params.password, 12);

      const newAdmin = await this._adminRepository.signup({
        ...params,
        password: saltedPassword,
        role: "hospital",
      });

      return newAdmin;

    } catch (error) {
      throw error;
    }
  }

  async login(email: string, password: string): Promise<string> {
    const findAdmin = await this._adminRepository.findByEmail(email);

    // console.log(findAdmin);

    if (!findAdmin) {
      console.log("존재하지 않는 회원입니다.")
      throw new HttpException(404, "존재하지 않는 회원입니다.");
    }    

    const plainPassword = password;
    
    const isSamePassword = bcrypt.compare(plainPassword, findAdmin.password);

    if (!isSamePassword) {
      throw new HttpException(401, "비밀번호가 일치하지 않습니다.");
    }

    const accessToken = JwtService.generateAccessToken({
      email: findAdmin.email,
      role: findAdmin.role,
      // 유효기간 1시간
      expiresIn: "1h",
    });

    return accessToken;
  }

  async logout(): Promise<void> {}

}