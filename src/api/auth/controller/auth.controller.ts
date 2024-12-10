import { NextFunction, Request, Response } from "express";
import { AuthService } from "@/api/auth/service/auth.service.type";

export default class AuthController {
  private readonly _authService: AuthService;
  constructor(authService: AuthService) {
    this._authService = authService;
    this.login = this.login.bind(this);
  }

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { loginId, password } = req.body;

      const result = await this._authService.login(loginId, password);

      res.status(200).json({
        message: "로그인 성공",
        data: result,
      });
    } catch (error) {
      res.status(500).json({ message: "로그인 실패" });
      next(error);
    }
  }
}
