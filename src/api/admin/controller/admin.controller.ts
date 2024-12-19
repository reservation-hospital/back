import { NextFunction, Request, Response } from "express";
import { AdminService } from "@/api/admin/service/admin.service.type";

export default class AdminController {
  constructor(private _adminService: AdminService) {
    this.signup = this.signup.bind(this);
    this.getAdmins = this.getAdmins.bind(this);
    this.getAdmin = this.getAdmin.bind(this);
    this.updateAdmin = this.updateAdmin.bind(this);
    this.deleteAdmin = this.deleteAdmin.bind(this);
  }

  async signup(req: Request, res: Response, next: NextFunction) {
    try {
      const admin = await this._adminService.signUp({
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
        role: req.body.role,
        hospital: req.body.hospital,
      });

      res.status(201).json({ message: "회원가입 성공", data: admin });
    } catch (error) {
      next(error);
    }
  }
  async getAdmins(req: Request, res: Response, next: NextFunction) {
    try {
      const admins = await this._adminService.getAdmins();
      res.status(200).json(admins);
    } catch (error) {
      next(error);
    }
  }
  async getAdmin(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    console.log(req.params);
    try {
      const admin = await this._adminService.getAdmin(id);
      res.status(200).json(admin);
    } catch (error) {
      next(error);
    }
  }
  async updateAdmin(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    try {
      await this._adminService.updateAdmin(id, req.body);
      res.status(200).json({ message: "관리자 수정 성공" });
    } catch (error) {
      next(error);
    }
  }
  async deleteAdmin(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    try {
      await this._adminService.deleteAdmin(id);
      res.status(200).json({ message: "관리자 삭제 성공" });
    } catch (error) {
      next(error);
    }
  }
}
