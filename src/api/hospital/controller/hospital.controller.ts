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
    try {
      const hospital = await this._hospitalService.createHospital({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        address: req.body.address,
        phone: req.body.phone,
        latitude:req.body.latitude,
        longitude:req.body.longitude,
        description:req.body.description,
      });
      res.status(200).json(hospital);
    } catch (error) {
      res.status(409).json({ message: "병원 생성 실패" });
    }
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
    try {
      const {hospitalId} = req.params;

      const hospital = await this._hospitalService.getHospital(hospitalId);

      res.status(200).json({
        message: "병원 조회 성공",
        data: hospital,
      });
    } catch (error) {
      res.status(404).json({ message: "병원 조회 실패" });
    }
  }
  
  /** 병원 정보 수정 */
  async updateHospital(req: Request, res: Response, next: NextFunction) {
    try {
      
      const updateData = { ...req.body };
  
      const hospital = await this._hospitalService.updateHospital(req.params.hospitalId, updateData);
  
        res.status(200).json({
          message: "병원 수정 성공",
          data: hospital,
        });
      } catch (error) {
        res.status(409).json({ message: "병원 수정 실패" });
      }
  }
}