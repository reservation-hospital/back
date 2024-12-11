import { Request, Response, NextFunction } from "express";

export default class HospitalContoller {
  /** 병원 상세 조회 */
  async getHospital(req: Request, res: Response, next: NextFunction) {
    res.send("get hostpital");
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
  /** 병원 수정 */
  async updateHospital(req: Request, res: Response, next: NextFunction) {
    res.send("update hostpital");
  }
}
