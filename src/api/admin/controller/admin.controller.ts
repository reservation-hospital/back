import { NextFunction, Request, Response } from "express";
import { AdminService } from "@/api/admin/service/admin.service.type";
import bcrypt from "bcryptjs";

export default class AdminController {
  // 다른 곳에서 만든 서비스 컨트롤러에서 주입
  constructor(private _adminService: AdminService) {
    this.signup = this.signup.bind(this);
    this.getAdmins = this.getAdmins.bind(this);
    this.getAdmin = this.getAdmin.bind(this);
    this.updateAdmin = this.updateAdmin.bind(this);
    this.deleteAdmin = this.deleteAdmin.bind(this);
    this.getUserAdmin = this.getUserAdmin.bind(this);
  }

  /** 회원가입(role = admin, hospital) */
  async signup(req: Request, res: Response, next: NextFunction) {
    console.log(req.body);
    try {
      const admin = await this._adminService.signUp({
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
        hospital: req.body.hospital,
      });

      res.status(201).json({ message: "회원가입 성공", data: admin });
    } catch (error) {
      next(error);
    }
  }

  /** 관리자 전체 조회(role = admin) */
  async getAdmins(req: Request, res: Response, next: NextFunction) {
    try {
      const admins = await this._adminService.getAdmins();
      res.status(200).json({
        message: "관리자 목록 조회 성공",
        data: admins,
      });
    } catch (error) {
      res.status(400).json({ message: "관리자 목록 조회 실패" });
      next(error);
    }
  }

  /** 관리자 조회(role = admin,hospital) */
  async getAdmin(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.admin;
      const admin = await this._adminService.getAdmin(id);

      res.status(200).json({
        message: "관리자 상세 조회 성공",
        data: admin,
      });
    } catch (error) {
      next(error);
    }
  }
  /** 관리자 조회(role = user) */
  async getUserAdmin(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const admin = await this._adminService.userGetAdmin(id);

      res.status(200).json({
        message: "관리자 상세 조회 성공",
        data: admin,
      });
    } catch (error) {
      next(error);
    }
  }

  /** 관리자 수정(role = admin) */
  async updateAdmin(req: Request, res: Response, next: NextFunction) {
    try {
      // const { id } = req.params;
      // await this._adminService.updateAdmin(id, req.body);

      const updateData = { ...req.body };

      if (updateData.password) {
        const saltedPassword = await bcrypt.hash(updateData.password, 10);
        updateData.password = saltedPassword;
      }

      const admin = await this._adminService.updateAdmin(
        req.admin.id,
        updateData
      );
      res.status(200).json({
        message: "관리자 수정 성공",
        data: admin,
      });
    } catch (error) {
      res.status(400).json({ message: "관리자 수정 실패" });
    }
  }

  /** 관리자 삭제(role = admin) */
  async deleteAdmin(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      await this._adminService.deleteAdmin(id);
      res.status(200).json({ message: "관리자 삭제 성공" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "관리자 삭제 실패" });
      // next(error);
    }
  }
}
