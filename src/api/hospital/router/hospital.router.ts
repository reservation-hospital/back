import express from "express";
import { extractPath } from "@/utils/path.util";
import HospitalController from "@/api/hospital/controller/hospital.controller";
import { ROUTES_INDEX } from "@/api";

const hospitalRouter = express.Router();
const hospitalController = new HospitalController();

const HOSPITAL_ROUTER = {
  /** 병원 가입 */
  SIGN_UP: "/api/hospital/signup",
  /** 병원 로그인 */
  LOGIN: "/api/hospital/login",
  /** 병원 로그아웃 */
  LOGOUT: "/api/hospital/logout",
  /** 병원 상세 조회 */
  GET_MY_INFO: "/api/hospital/:hospitalId",
  /** 병원 정보 수정 */
  UPDATE_HOSPITAL: "/api/hospital/:hospitalId",
} as const;

/** 회원 가입 */
hospitalRouter.post(
  extractPath(HOSPITAL_ROUTER.SIGN_UP, ROUTES_INDEX.HOSPITAL_API),
  hospitalController.createHospital
);
/** 병원 로그인 */
hospitalRouter.post(
  extractPath(HOSPITAL_ROUTER.LOGIN, ROUTES_INDEX.HOSPITAL_API),
  hospitalController.loginHospital
);
/** 병원 로그아웃 */
hospitalRouter.post(
  extractPath(HOSPITAL_ROUTER.LOGOUT, ROUTES_INDEX.HOSPITAL_API),
  hospitalController.logoutHospital
);
/** 병원 상세 조회 */
hospitalRouter.get(
  extractPath(HOSPITAL_ROUTER.GET_MY_INFO, ROUTES_INDEX.HOSPITAL_API),
  hospitalController.getHospital
);
/** 병원 정보 수정 */
hospitalRouter.put(
  extractPath(HOSPITAL_ROUTER.UPDATE_HOSPITAL, ROUTES_INDEX.HOSPITAL_API),
  hospitalController.updateHospital
);

export default hospitalRouter;