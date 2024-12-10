import { Request, Response, NextFunction } from "express";

export default class HospitalContoller {
  /** 병원 상세 조회 */
  async getHospital(req: Request, res: Response, next: NextFunction) {
    const hid = req.params;
    console.log(hid);
    res.send("get hostpital");
  }
  /** 병원 생성 */
  async createHospital(req: Request, res: Response, next: NextFunction) {
    res.send("create hostpital");
  }
  /** 병원 수정 */
  async updateHospital(req: Request, res: Response, next: NextFunction) {
    res.send("update hostpital");
  }
}
