// import AdminController from "@/api/hospital/controller/admin.controller";
// import { AdminServiceImpl } from "@/api/hospital/service/admin.service";
// import { MongooseAdminRepository } from "@/api/hospital/repository/mongooseAdmin.repository";
// import express from "express";
// import { extractPath } from "@/utils/path.util";
// import { ROUTES_INDEX } from "@/api/index";

// const adminRouter = express.Router();

// const adminController = new AdminController(
//     new AdminServiceImpl(
//       new MongooseAdminRepository()
//     )
//   );

// const ADMIN_ROUTES = {
//     /** 병원 목록 조회 */
//     GET_HOSPITALS : `/api/admin/hospitals`,
//     /** 병원 상세 조회(hospital _id 기반) */
//     GET_HOSPITAL : `/api/admin/:hospitalId`,
//     /** 병원 정보 수정(Status) */
//     UPDATE_HOSPITAL : `/api/admin/hospitals`,
//     /** 병원 삭제 */
//     DELETE_HOSPITAL : `/api/admin/:hospitalId`,    

//     // 상품 목록 조회
//     // 상품 상세 조회

//     // /** 선택 상품 조회 */
//     // GET_SELECT_PRODUCTS : `/api/admin/selectProducts`,
//     // /** 선택 상품 등록 */
//     // CREATE_SELECT_PRODUCT : `/api/admin/selectProducts`,
//     // /** 선택 상품 삭제 */
//     // DELETE_SELECT_PRODUCT : `/api/admin/:selectProductId`,

//     // /** 예약 목록 조회(order _id 기반) */
//     // GET_ORDERS : `/api/admin/orders`,
//     // /** 예약 상세 조회(order _id 기반) */
//     // GET_ORDER : `/api/admin/:orderId`,
//     // 예약 상태 수정
//     // 예약 삭제
// }

// adminRouter.post(
//     extractPath(ADMIN_ROUTES.SIGN_UP,ROUTES_INDEX.ADMIN_API),
//     adminController.signup
// )

// // adminRouter.post(
// //     extractPath(ADMIN_ROUTES.LOGIN,ROUTES_INDEX.ADMIN_API),
// //     authRoleMiddleware(["admin"]),
// //     adminController.login
// // )

// // adminRouter.post(
// //     extractPath(ADMIN_ROUTES.LOGOUT,ROUTES_INDEX.ADMIN_API),
// //     adminController.logout
// // )

// // adminRouter.get(
// //     extractPath(ADMIN_ROUTES.GET_HOSPITALS,ROUTES_INDEX.ADMIN_API),
// //     adminController.getHospitals
// // )

// // adminRouter.get(
// //     extractPath(ADMIN_ROUTES.GET_HOSPITAL,ROUTES_INDEX.ADMIN_API),
// //     adminController.getHospital
// // )

// // adminRouter.post(
// //     extractPath(ADMIN_ROUTES.CREATE_HOSPITAL,ROUTES_INDEX.ADMIN_API),
// //     adminController.createHospital
// // )

// // adminRouter.delete(
// //     extractPath(ADMIN_ROUTES.DELETE_HOSPITAL,ROUTES_INDEX.ADMIN_API),
// //     adminController.deleteHospital
// // )

// // adminRouter.get(
// //     extractPath(ADMIN_ROUTES.GET_ORDERS,ROUTES_INDEX.ADMIN_API),
// //     adminController.getOrders
// // )

// // adminRouter.get(
// //     extractPath(ADMIN_ROUTES.GET_ORDER,ROUTES_INDEX.ADMIN_API),
// //     adminController.getOrder
// // )

// // adminRouter.get(
// //     extractPath(ADMIN_ROUTES.GET_SELECT_PRODUCTS,ROUTES_INDEX.ADMIN_API),
// //     adminController.getSelectProducts
// // )

// // adminRouter.post(
// //     extractPath(ADMIN_ROUTES.CREATE_SELECT_PRODUCT,ROUTES_INDEX.ADMIN_API),
// //     adminController.createSelectProduct
// // )

// // adminRouter.delete(
// //     extractPath(ADMIN_ROUTES.DELETE_SELECT_PRODUCT,ROUTES_INDEX.ADMIN_API),
// //     adminController.deleteSelectProduct
// // )

// export default adminRouter;