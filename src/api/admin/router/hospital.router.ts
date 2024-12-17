import express from "express";

import { ROUTES_INDEX } from "@/api/index";
import { extractPath } from "@/utils/path.util";
import HospitalController from "../controller/hospital.controller";

const hospitalRouter = express.Router();
const hospitalController = new HospitalController();

const HOSPITAL_ROUTES = {
  /** 병원 가입 */
  SIGN_UP: `/api/hospital`,
  /** 병원 로그인 */
  LOGIN: `/api/hospital/login`,
  /** 병원 로그아웃 */
  LOGOUT: `/api/hospital/logout`,
  /** 병원 목록 조회 */
  GET_HOSPITALS: `/api/hospital`,
  /** 병원 상세 조회(hospital _id 기반) */
  GET_HOSPITAL: `/api/hospital/:hospitalId`,
  /** 병원 수정 */
  UPDATE_HOSPITAL: `/api/hospital/:hospitalId`, // 다이나믹 패스 수정 필요
  /** 병원 삭제 */
  DELETE_HOSPITAL: `/api/hospital/:hospitalId`,
};

hospitalRouter.post(
  extractPath(HOSPITAL_ROUTES.SIGN_UP, ROUTES_INDEX.HOSPITAL_API),
  hospitalController.signUp
);

hospitalRouter.post(
  extractPath(HOSPITAL_ROUTES.LOGIN, ROUTES_INDEX.HOSPITAL_API),
  hospitalController.login
);

hospitalRouter.post(
  extractPath(HOSPITAL_ROUTES.LOGOUT, ROUTES_INDEX.HOSPITAL_API),
  hospitalController.logout
);

hospitalRouter.get(
  extractPath(HOSPITAL_ROUTES.GET_HOSPITALS, ROUTES_INDEX.HOSPITAL_API)
);

hospitalRouter.get(
  extractPath(HOSPITAL_ROUTES.GET_HOSPITAL, ROUTES_INDEX.HOSPITAL_API),
  hospitalController.getHospital
);

hospitalRouter.put(
  extractPath(HOSPITAL_ROUTES.UPDATE_HOSPITAL, ROUTES_INDEX.HOSPITAL_API),
  hospitalController.updateHospital
);

hospitalRouter.delete(
  extractPath(HOSPITAL_ROUTES.DELETE_HOSPITAL, ROUTES_INDEX.HOSPITAL_API),
  hospitalController.deleteHospital
);

export default hospitalRouter;
