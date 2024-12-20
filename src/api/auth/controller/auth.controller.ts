import { NextFunction, Request, Response } from "express";
import { AuthService } from "@/api/auth/service/auth.service.type";
import bcrypt from "bcryptjs";

export default class AuthController {
  constructor(private readonly _authService: AuthService) {
    this.signup = this.signup.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  async signup(req: Request, res: Response, next: NextFunction) {
    try {
      const { password } = req.body;

      const saltedPassword = await bcrypt.hash(password, 12);

      const admin = await this._authService.signup({
        email: req.body.email,
        password: saltedPassword,
        name: req.body.name,
      });

      res.status(201).json({
        message: "회원가입 성공",
        data: admin,
      });
    } catch (error) {
      next(error);
    }
  }

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;

      // console.log(req.body);

      const result = await this._authService.login(email, password);

      res.status(200).json({
        message: "로그인 성공",
        data: result,
      });
    } catch (error) {
      next(error);
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
