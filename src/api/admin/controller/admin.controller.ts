import { NextFunction, Request, Response } from "express";
import { AdminService } from "@/api/admin/service/admin.service.type";
import { SelectProductService } from "@/api/selectProduct/service/selectProduct.service.type";
import bcrypt from "bcryptjs";

export default class AdminController {  
  // 다른 곳에서 만든 서비스 컨트롤러에서 주입
  constructor(private _adminService: AdminService, private _selectProductService: SelectProductService) {
    this.signup = this.signup.bind(this);
    this.getAdmins = this.getAdmins.bind(this);
    this.getAdmin = this.getAdmin.bind(this);
    this.updateAdmin = this.updateAdmin.bind(this);
    this.deleteAdmin = this.deleteAdmin.bind(this);
    this.getSelectProduct = this.getSelectProduct.bind(this);
  }

  /** 회원가입(role = admin, hospital) */
  async signup(req: Request, res: Response, next: NextFunction) {
    try {
      const { password } = req.body;

      const saltedPassword = await bcrypt.hash(password, 12);
    
      const admin = await this._adminService.signUp({
        email: req.body.email,
        password: saltedPassword,
        name: req.body.name,
        // hospitals: req.body.hospital,
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

  /** 관리자 조회(role = admin) */
  async getAdmin(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const admin = await this._adminService.getAdmin(id);

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
      const admin = await this._adminService.updateAdmin(req.params.id, req.body);
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

  /** 선택 상품 목록 조회 */
  async getSelectProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const selectProducts = await this._selectProductService.getSelectProducts();
      res.status(200).json({
        message: "선택 상품 목록 조회 성공",
        data: selectProducts,
      });
    } catch (error) {
      res.status(400).json({ message: "선택 상품 목록 조회 실패" });
      next(error);
    }
  }

}