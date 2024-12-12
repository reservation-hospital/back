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
  /** 로그인 */
  LOGIN: `/api/admin/login`,
  /** 로그아웃 */
  LOGOUT: `/api/admin/logout`,

  /** 병원 목록 조회 */
  GET_HOSPITALS: `/api/admin/hospitals`,
  /** 병원 상세 조회(hospital _id 기반) */
  GET_HOSPITAL: `/api/admin/:hospitalId`,
  // /** 병원 생성 */
  // CREATE_HOSPITAL : `/api/admin/hospitals`,
  /** 병원 삭제 */
  DELETE_HOSPITAL: `/api/admin/:hospitalId`,

  // /** 예약 목록 조회(order _id 기반) */
  // GET_ORDERS : `/api/admin/orders`,
  // /** 예약 상세 조회(order _id 기반) */
  // GET_ORDER : `/api/admin/:orderId`,

  // /** 선택 상품 조회 */
  // GET_SELECT_PRODUCTS : `/api/admin/selectProducts`,
  // /** 선택 상품 등록 */
  // CREATE_SELECT_PRODUCT : `/api/admin/selectProducts`,
  // /** 선택 상품 삭제 */
  // DELETE_SELECT_PRODUCT : `/api/admin/:selectProductId`,
};

adminRouter.post(
  extractPath(ADMIN_ROUTES.SIGN_UP, ROUTES_INDEX.ADMIN_API),
  adminController.signup
);

// adminRouter.post(
//     extractPath(ADMIN_ROUTES.LOGIN,ROUTES_INDEX.ADMIN_API),
//     adminController.login
// )

// adminRouter.post(
//     extractPath(ADMIN_ROUTES.LOGOUT,ROUTES_INDEX.ADMIN_API),
//     adminController.logout
// )

// adminRouter.get(
//     extractPath(ADMIN_ROUTES.GET_HOSPITALS,ROUTES_INDEX.ADMIN_API),
//     adminController.getHospitals
// )

// adminRouter.get(
//     extractPath(ADMIN_ROUTES.GET_HOSPITAL,ROUTES_INDEX.ADMIN_API),
//     adminController.getHospital
// )

// adminRouter.post(
//     extractPath(ADMIN_ROUTES.CREATE_HOSPITAL,ROUTES_INDEX.ADMIN_API),
//     adminController.createHospital
// )

// adminRouter.delete(
//     extractPath(ADMIN_ROUTES.DELETE_HOSPITAL,ROUTES_INDEX.ADMIN_API),
//     adminController.deleteHospital
// )

// adminRouter.get(
//     extractPath(ADMIN_ROUTES.GET_ORDERS,ROUTES_INDEX.ADMIN_API),
//     adminController.getOrders
// )

// adminRouter.get(
//     extractPath(ADMIN_ROUTES.GET_ORDER,ROUTES_INDEX.ADMIN_API),
//     adminController.getOrder
// )

// adminRouter.get(
//     extractPath(ADMIN_ROUTES.GET_SELECT_PRODUCTS,ROUTES_INDEX.ADMIN_API),
//     adminController.getSelectProducts
// )

// adminRouter.post(
//     extractPath(ADMIN_ROUTES.CREATE_SELECT_PRODUCT,ROUTES_INDEX.ADMIN_API),
//     adminController.createSelectProduct
// )

// adminRouter.delete(
//     extractPath(ADMIN_ROUTES.DELETE_SELECT_PRODUCT,ROUTES_INDEX.ADMIN_API),
//     adminController.deleteSelectProduct
// )

export default adminRouter;
