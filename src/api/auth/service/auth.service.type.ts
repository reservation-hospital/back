export interface AuthService {
  /** 로그인 */
  login(
    email: string,
    password: string
  ): Promise<{ accessToken: string; user: IAdmin }>;
  /** 로그아웃 */
  logout(): Promise<void>;
}
