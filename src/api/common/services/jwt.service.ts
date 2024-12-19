import jwt from "jsonwebtoken";

type Params = {
  /** 이메일 */
  email: string;
  /** 역할 */
  role?: role;
  /** 만료 시간 */
  expiresIn?: string;
};

export class JwtService {
  static readonly ACCESS_TOKEN_SECRET =
    process.env.ACCESS_TOKEN_SECRET || "access";
  static readonly REFRESH_TOKEN_SECRET =
    process.env.REFRESH_TOKEN_SECRET || "refresh";

  /** 엑세스 토큰 검증 */
  static verifyAccessToken(token: string) {
    const secret = this.ACCESS_TOKEN_SECRET;

    return jwt.verify(token, secret) as jwt.JwtPayload;
  }

  /** 리프레시 토큰 검증 */
  static verifyRefreshToken(token: string) {
    const secret = this.REFRESH_TOKEN_SECRET;

    return jwt.verify(token, secret) as jwt.JwtPayload;
  }

  /** 엑세스 토큰 발행 */
  static generateAccessToken(params: Params) {
    const { email, expiresIn, role } = params;

    return jwt.sign(
      { email, role: role ?? "hospital" },
      this.ACCESS_TOKEN_SECRET,
      {
        expiresIn: expiresIn || "1h",
      }
    );
  }

  /** 리프레시 토큰 발행 */
  static generateRefreshToken(params: Omit<Params, "role">) {
    const { email, expiresIn } = params;
    return jwt.sign({ email }, this.REFRESH_TOKEN_SECRET, {
      expiresIn: expiresIn || "14d",
    });
  }
}
