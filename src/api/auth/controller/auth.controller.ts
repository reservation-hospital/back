import { NextFunction, Request, Response } from "express";
import { AuthService } from "@/api/auth/service/auth.service.type";
import bcrypt from "bcryptjs";

export default class AuthController {
  constructor(private readonly _authService: AuthService) {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;
      const result = await this._authService.login(email, password);

      res.status(200).json({
        message: "로그인 성공",
        data: result,
      });
    } catch (error) {
      res.status(500).json({ message: "로그인 실패" });
    }
  }

  async logout(req: Request, res: Response, next: NextFunction) {
    try {
      res.clearCookie("accessToken", { path: "/" });
      res.status(200).send("로그아웃 성공");
      // res.redirect('/')
    } catch (error) {
      next(error);
    }
  }
}
