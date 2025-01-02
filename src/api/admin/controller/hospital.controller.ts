import { NextFunction, Request, Response } from "express";
import { HospitalService } from "@/api/admin/service/hospital.service.type";
import bcrypt from "bcryptjs";

export default class HospitalController {
  constructor(private _hospitalService: HospitalService) {
    this.signup = this.signup.bind(this);
    this.updateHospital = this.updateHospital.bind(this);
    this.deleteHospital = this.deleteHospital.bind(this);
    this.getHospital = this.getHospital.bind(this);
  }

  /** 회원가입(role = admin, hospital) */
  async signup(req: Request, res: Response, next: NextFunction) {
    try {
      const { password } = req.body;

      const saltedPassword = await bcrypt.hash(password, 12);

      const hospital = await this._hospitalService.signUp({
        email: req.body.email,
        password: saltedPassword,
        name: req.body.name,
        address: req.body.address,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        businessNumber: req.body.businessNumber,
      });

      res.status(201).json({ message: "회원가입 성공", data: hospital });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

 /** 병원 수정(role = hospital) */
  async updateHospital(req: Request, res: Response, next: NextFunction) {
    try {
    // const { id } = req.params;
    // await this._adminService.updateHospital(id, req.body);
    const hospital = await this._hospitalService.updateHospital(req.params.id, req.body);
    res.status(200).json({
      message: "병원 수정 성공",
      data: hospital,
    });
    } catch (error) {
      res.status(400).json({ message: "병원 수정 실패" });
      // next(error);
    }
  }

  /** 병원 삭제(role = hospital) */
  async deleteHospital(req: Request, res: Response, next: NextFunction) {
    try {
    const { id } = req.params;
    await this._hospitalService.deleteHospital(id);
      res.status(200).json({ message: "병원 삭제 성공" });
    } catch (error) {
      next(error);
    }
  }

  /** 병원 상세 조회(role = hospital) */
  async getHospital(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const hospital = await this._hospitalService.getHospital(id);
      res.status(200).json({
        message: "병원 상세 조회 성공",
        data: hospital,
      });
    } catch (error) {
      res.status(404).json({ message: "병원 상세 조회 실패" });
      // next(error);
    }
  }
  
}