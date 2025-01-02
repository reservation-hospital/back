import HospitalController from "@/api/admin/controller/hospital.controller";
import { HospitalServiceImpl } from "@/api/admin/service/hospital.service";
import { MongooseHospitalRepository } from "@/api/admin/repository/mongooseHospital.repository";
import express from "express";
import { extractPath } from "@/utils/path.util";
import { ROUTES_INDEX } from "@/api/index";
import { authAdminMiddleware } from "@/api/common/middleware/authAdmin.middleware";
import { authRoleMiddleware } from "@/api/common/middleware/authRole.middleware";

const hospitalRouter = express.Router();

const hospitalController = new HospitalController(
  new HospitalServiceImpl(new MongooseHospitalRepository())
);

const HOSPITAL_ROUTES = {
/** 회원가입(role = admin, hospital) */
  SIGN_UP: `/api/hospital`,
  /** 병원 수정(role = hospital) */
  UPDATE_HOSPITAL: `/api/hospital/:id`,
  /** 병원 삭제(role = hospital) */
  DELETE_HOSPITAL: `/api/hospital/:id`,
  /** 병원 상세 조회(role = hospital) */
  GET_HOSPITAL: `/api/hospital/:id`,
}

/** 회원가입(role = admin, hospital) */
hospitalRouter.post(
  extractPath(HOSPITAL_ROUTES.SIGN_UP, ROUTES_INDEX.HOSPITAL_API),
  hospitalController.signup
);

/** 병원 수정(role = hospital) */
hospitalRouter.put(
  extractPath(HOSPITAL_ROUTES.UPDATE_HOSPITAL, ROUTES_INDEX.HOSPITAL_API),
  authRoleMiddleware(["hospital"]),
  authAdminMiddleware,
  hospitalController.updateHospital
);

/** 병원 삭제(role = hospital) */
hospitalRouter.delete(
  extractPath(HOSPITAL_ROUTES.DELETE_HOSPITAL, ROUTES_INDEX.HOSPITAL_API),
  authRoleMiddleware(["hospital"]),
  authAdminMiddleware,
  hospitalController.deleteHospital
);

/** 병원 상세 조회(role = hospital) */
hospitalRouter.get(
  extractPath(HOSPITAL_ROUTES.GET_HOSPITAL, ROUTES_INDEX.HOSPITAL_API),
  authRoleMiddleware(["hospital"]),
  authAdminMiddleware,
  hospitalController.getHospital
);

export default hospitalRouter;