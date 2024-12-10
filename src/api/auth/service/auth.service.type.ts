export interface AuthService {
  login(loginId: string, password: string): Promise<string>;
}
