import express from "express";
import { extractPath } from "@/utils/path.util";
import HospitalContoller from "../controller/hospital.controller";
import { ROUTES_INDEX } from "@/api";

const hospitalRouter = express.Router();
const hospitalController = new HospitalContoller();

const HOSPITAL_ROUTER = {
  MY_HOSPITAL: "/api/hospital",
  HOSPITAL_SING_UP: "/api/hospital/signup",
  HOSPITAL_LOGIN: "/api/hospital/login",
  HOSPITAL_LOGOUT: "/api/hospital/logout",
  HOPITAL_UPDATE: "/api/hospital",
} as const;

/** 병원 상세 조회 */
hospitalRouter.get(
  extractPath(HOSPITAL_ROUTER.MY_HOSPITAL, ROUTES_INDEX.HOSPITAL_API),
  hospitalController.getHospital
);
/** 병원 가입 */
hospitalRouter.post(
  extractPath(HOSPITAL_ROUTER.HOSPITAL_SING_UP, ROUTES_INDEX.HOSPITAL_API),
  hospitalController.createHospital
);
/** 병원 로그인 */
hospitalRouter.post(
  extractPath(HOSPITAL_ROUTER.HOSPITAL_LOGIN, ROUTES_INDEX.HOSPITAL_API),
  hospitalController.loginHospital
);
/** 병원 로그아웃 */
hospitalRouter.post(
  extractPath(HOSPITAL_ROUTER.HOSPITAL_LOGOUT, ROUTES_INDEX.HOSPITAL_API),
  hospitalController.logoutHospital
);
/** 병원 수정 */
hospitalRouter.put(
  extractPath(HOSPITAL_ROUTER.HOPITAL_UPDATE, ROUTES_INDEX.HOSPITAL_API),
  hospitalController.updateHospital
);

export default hospitalRouter;
