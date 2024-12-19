import AdminController from "@/api/admin/controller/admin.controller";
import { AdminServiceImpl } from "@/api/admin/service/admin.service";
import { MongooseAdminRepository } from "@/api/admin/repository/mongooseAdmin.repository";
import express from "express";
import { extractPath } from "@/utils/path.util";
import { ROUTES_INDEX } from "@/api/index";

const adminRouter = express.Router();

const adminController = new AdminController(
  new AdminServiceImpl(new MongooseAdminRepository())
);

const ADMIN_ROUTES = {
  /** 회원가입 */
  SIGN_UP: `/api/admin`,
  /** 관리자 전체 조회 */
  GET_ADMINS: `/api/admin/`,
  /** 관리자 조회 */
  GET_ADMIN: `/api/admin/:id`,
  /** 관리자 수정 */
  UPDATE_ADMIN: `/api/admin/:id`,
  /** 관리자 삭제 */
  DELETE_ADMIN: `/api/admin/:id`,
};

adminRouter.post(
  extractPath(ADMIN_ROUTES.SIGN_UP, ROUTES_INDEX.ADMIN_API),
  adminController.signup
);
adminRouter.get(
  extractPath(ADMIN_ROUTES.GET_ADMINS, ROUTES_INDEX.ADMIN_API),
  adminController.getAdmins
);
adminRouter.get(
  extractPath(ADMIN_ROUTES.GET_ADMIN, ROUTES_INDEX.ADMIN_API),
  adminController.getAdmin
);
adminRouter.put(
  extractPath(ADMIN_ROUTES.UPDATE_ADMIN, ROUTES_INDEX.ADMIN_API),
  adminController.updateAdmin
);
adminRouter.delete(
  extractPath(ADMIN_ROUTES.DELETE_ADMIN, ROUTES_INDEX.ADMIN_API),
  adminController.deleteAdmin
);

export default adminRouter;
