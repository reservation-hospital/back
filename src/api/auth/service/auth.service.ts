import { CryptoService } from "@/api/common/services/crypto.service";
import { AuthService } from "@/api/auth/service/auth.service.type";
import { UserRepository } from "@/api/users/repository/user/user.repository";
import HttpException from "@/api/common/exceptions/http.exception";
import { JwtService } from "@/api/common/services/jwt.service";

export class AuthServiceImpl implements AuthService {
  private readonly _userRepository: UserRepository;
  constructor(userRepository: UserRepository) {
    this._userRepository = userRepository;
  }

  async login(loginId: string, password: string): Promise<string> {
    const findUser = await this._userRepository.findByLoginId(loginId);

    if (!findUser) {
      console.log("존재하지 않는 회원입니다.")
      throw new HttpException(404, "존재하지 않는 회원입니다.");
    }
    

    const isSamePassword = CryptoService.matchPassword(
      password,
      findUser?.password || "",
      findUser.salt ?? ""
    );

    if (!isSamePassword) {
      throw new HttpException(401, "비밀번호가 일치하지 않습니다.");
    }

    const accessToken = JwtService.generateAccessToken({
      role: findUser.role,
      userId: findUser.id,
      expiresIn: "7d",
    });

    return accessToken;
  }
}
