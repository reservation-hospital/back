import { Request, Response, NextFunction } from "express";
import { HospitalService } from "@/api/hospital/service/hospital.service.type";

export default class HospitalController {
constructor(private readonly _hospitalService: HospitalService) {
  this.createHospital = this.createHospital.bind(this);
  this.loginHospital = this.loginHospital.bind(this);
  this.logoutHospital = this.logoutHospital.bind(this);
  this.getHospital = this.getHospital.bind(this);
  this.updateHospital = this.updateHospital.bind(this);
}

  /** 병원 가입 */
  async createHospital(req: Request, res: Response, next: NextFunction) {
    res.send("create hostpital");
  }
  /** 병원 로그인 */
  async loginHospital(req: Request, res: Response, next: NextFunction) {
    res.send("login hostpital");
  }
  /** 병원 로그아웃 */
  async logoutHospital(req: Request, res: Response, next: NextFunction) {
    res.send("logout hostpital");
  }
  /** 병원 상세 조회 */
  async getHospital(req: Request, res: Response, next: NextFunction) {
    res.send("get hostpital");
  }
  /** 병원 정보 수정 */
  async updateHospital(req: Request, res: Response, next: NextFunction) {
    res.send("update hostpital");
  }
}