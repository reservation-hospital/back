import { Request, Response, NextFunction } from "express";

export default class HospitalController {
  async signUp(req: Request, res: Response, next: NextFunction) {
    try {
      res.send("hospital sign up");
    } catch (err) {
      next(err);
    }
  }
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      res.send("hospital login");
    } catch (err) {
      next(err);
    }
  }
  async logout(req: Request, res: Response, next: NextFunction) {
    try {
      res.send("hospital logout");
    } catch (err) {
      next(err);
    }
  }

  async getHospital(req: Request, res: Response, next: NextFunction) {
    try {
      res.send("hospital");
    } catch (err) {
      next(err);
    }
  }
  async updateHospital(req: Request, res: Response, next: NextFunction) {
    try {
      res.send("hospital update");
    } catch (err) {
      next(err);
    }
  }
  async deleteHospital(req: Request, res: Response, next: NextFunction) {
    try {
      res.send("hospital delete");
    } catch (err) {
      next(err);
    }
  }
}
