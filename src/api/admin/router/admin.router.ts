import AdminController from "@/api/admin/controller/admin.controller";
import { AdminServiceImpl } from "@/api/admin/service/admin.service";
import { MongooseAdminRepository } from "@/api/admin/repository/mongooseAdmin.repository";
import express from "express";
import { extractPath } from "@/utils/path.util";
import { ROUTES_INDEX } from "@/api/index";
import { authAdminMiddleware } from "@/api/common/middleware/authAdmin.middleware";
import { authRoleMiddleware } from "@/api/common/middleware/authRole.middleware";

const adminRouter = express.Router();

const adminController = new AdminController(
  new AdminServiceImpl(new MongooseAdminRepository())
);

const ADMIN_ROUTES = {
  /** 회원가입(role = admin, hospital) */
  SIGN_UP: `/api/admin`,
  /** 관리자 전체 조회(role = admin) */
  GET_ADMINS: `/api/admins`,
  /** 관리자 조회(role = admin) */
  GET_ADMIN: `/api/admin/:id`,
  /** 관리자 수정(role = admin) */
  UPDATE_ADMIN: `/api/admin/:id`,
  /** 관리자 삭제(role = admin) */
  DELETE_ADMIN: `/api/admin/:id`,
  /** 병원 목록 조회(role = admin) */
  GET_HOSPITALS: `/api/admin/hospitals`,
};

const HOSPITAL_ROUTES = {
  /** 병원 수정(role = hospital) */
  UPDATE_HOSPITAL: `/api/hospital/:id`,
  /** 병원 삭제(role = hospital) */
  DELETE_HOSPITAL: `/api/hospital/:id`,
  /** 병원 상세 조회(role = hospital) */
  GET_HOSPITAL: `/api/hospital/:id`,
}

/** 회원가입(role = admin, hospital) */
adminRouter.post(
  extractPath(ADMIN_ROUTES.SIGN_UP, ROUTES_INDEX.ADMIN_API),
  authRoleMiddleware(["admin", "hospital"]),
  adminController.signup
);

/** 관리자 전체 조회(role = admin) */
adminRouter.get(
  extractPath(ADMIN_ROUTES.GET_ADMINS, ROUTES_INDEX.ADMIN_API),
  authRoleMiddleware(["admin"]),
  adminController.getAdmins
);

/** 관리자 조회(role = admin) */
adminRouter.get(
  extractPath(ADMIN_ROUTES.GET_ADMIN, ROUTES_INDEX.ADMIN_API),
  authRoleMiddleware(["admin"]),
  authAdminMiddleware,
  adminController.getAdmin
);

/** 관리자 수정(role = admin) */
adminRouter.put(
  extractPath(ADMIN_ROUTES.UPDATE_ADMIN, ROUTES_INDEX.ADMIN_API),
  authRoleMiddleware(["admin"]),
  authAdminMiddleware,
  adminController.updateAdmin
);

/** 관리자 삭제(role = admin) */
adminRouter.delete(
  extractPath(ADMIN_ROUTES.DELETE_ADMIN, ROUTES_INDEX.ADMIN_API),
  authRoleMiddleware(["admin"]),
  authAdminMiddleware,
  adminController.deleteAdmin
);

/** 병원 목록 조회(role = admin) */
adminRouter.get(
  extractPath(ADMIN_ROUTES.GET_HOSPITALS, ROUTES_INDEX.ADMIN_API),
  authRoleMiddleware(["admin"]),
  adminController.getHospitals
);

/** 병원 수정(role = hospital) */
adminRouter.put(
  extractPath(HOSPITAL_ROUTES.UPDATE_HOSPITAL, ROUTES_INDEX.ADMIN_API),
  authRoleMiddleware(["hospital"]),
  authAdminMiddleware,
  adminController.updateHospital
);

/** 병원 삭제(role = hospital) */
adminRouter.delete(
  extractPath(HOSPITAL_ROUTES.DELETE_HOSPITAL, ROUTES_INDEX.ADMIN_API),
  authRoleMiddleware(["hospital"]),
  authAdminMiddleware,
  adminController.deleteHospital
);

/** 병원 상세 조회(role = hospital) */
adminRouter.get(
  extractPath(HOSPITAL_ROUTES.GET_HOSPITAL, ROUTES_INDEX.ADMIN_API),
  authRoleMiddleware(["hospital"]),
  authAdminMiddleware,
  adminController.getHospital
);

export default adminRouter;