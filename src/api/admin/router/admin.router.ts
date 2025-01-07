import AdminController from "@/api/admin/controller/admin.controller";
import { AdminServiceImpl } from "@/api/admin/service/admin.service";
import { MongooseAdminRepository } from "@/api/admin/repository/mongooseAdmin.repository";
import express from "express";
import { extractPath } from "@/utils/path.util";
import { ROUTES_INDEX } from "@/api/index";
import { authAdminMiddleware } from "@/api/common/middleware/authAdmin.middleware";
import { authRoleMiddleware } from "@/api/common/middleware/authRole.middleware";

const adminRouter = express.Router();

// const adminService = new AdminServiceImpl(new MongooseAdminRepository());

// const adminController = new AdminController(adminService);

const adminController = new AdminController(
  new AdminServiceImpl(
    new MongooseAdminRepository(),
    // new MongooseSelectProductRepository()
  ),
);

const ADMIN_ROUTES = {
  /** 회원가입(role = admin, hospital)(post) */
  SIGN_UP: `/api/admin/`,
  /** 관리자 전체 조회(role = admin)(get) */
  GET_ADMINS: `/api/admins/`,
  /** 관리자 조회(role = admin)(get) */
  GET_ADMIN: `/api/admin/`,
  /** 관리자 수정(role = admin)(put) */
  UPDATE_ADMIN: `/api/admin/`,
  /** 관리자 삭제(role = admin)(delete) */
  DELETE_ADMIN: `/api/admin/:id`,
};

/** 회원가입(role = admin, hospital) */
adminRouter.post(
  extractPath(ADMIN_ROUTES.SIGN_UP, ROUTES_INDEX.ADMIN_API),
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
  authRoleMiddleware(["admin", "hospital"]),
  authAdminMiddleware,
  adminController.getAdmin
);

/** 관리자 수정(role = admin) */
adminRouter.put(
  extractPath(ADMIN_ROUTES.UPDATE_ADMIN, ROUTES_INDEX.ADMIN_API),
  authRoleMiddleware(["admin", "hospital"]),
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

export default adminRouter;
