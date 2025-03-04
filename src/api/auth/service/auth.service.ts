import bcrypt from "bcryptjs";
import { AuthService } from "@/api/auth/service/auth.service.type";
import { AdminRepository } from "@/api/admin/repository/admin.repository";
import HttpException from "@/api/common/exceptions/http.exception";
import { JwtService } from "@/api/common/services/jwt.service";

export class AuthServiceImpl implements AuthService {
  private readonly _adminRepository: AdminRepository;
  constructor(adminRepository: AdminRepository) {
    this._adminRepository = adminRepository;
  }

  async login(
    email: string,
    password: string
  ): Promise<{ accessToken: string; user: IAdmin }> {
    let findEmail = await this._adminRepository.findByEmail(email);
    console.log(findEmail);
    if (!findEmail) {
      throw new HttpException(404, "존재하지 않는 회원입니다.");
    }

    const plainPassword = password; // 사용자가 입력한 비밀번호 (일반 텍스트)
    const hashedPassword = findEmail.password; // 데이터베이스에서 가져온 해싱된 비밀번호

    const isSamePassword = await bcrypt.compare(plainPassword, hashedPassword);

    if (!isSamePassword) {
      throw new HttpException(401, "비밀번호가 일치하지 않습니다.");
    }

    const accessToken = JwtService.generateAccessToken({
      id: findEmail.id,
      role: findEmail.role,
      expiresIn: "1h",
    });
    console.log(accessToken);

    return { accessToken, user: findEmail };
  }

  async logout(): Promise<void> {}
}
