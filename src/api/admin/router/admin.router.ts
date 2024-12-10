// import AdminController from "@/api/admin/controller/admin.controller";
// import { AdminServiceImpl } from "@/api/admin/service/admin.service";
import express from "express";
import { extractPath } from "@/utils/path.util";
import { ROUTES_INDEX } from "@/api/index";

const adminRouter = express.Router();

const ADMIN_ROUTES = {
    /** 로그아웃 */
    LOGOUT : `/api/admin/logout`,

    /** 병원 목록 조회 */
    GET_HOSPITALS : `/api/admin/hospitals`,
    /** 병원 상세 조회(hospital _id 기반) */
    GET_HOSPITAL : `/api/admin/:hospitalId`,
    /** 병원 생성 */
    CREATE_HOSPITAL : `/api/admin/hospitals`,
    /** 병원 수정 */
    UPDATE_HOSPITAL : `/api/admin/:hospitalId`,
    /** 병원 삭제 */
    DELETE_HOSPITAL : `/api/admin/:hospitalId`,

    /** 예약 목록 조회(order _id 기반) */
    GET_RESERVATIONS : `/api/admin/reservations`,
    /** 예약 상세 조회(order _id 기반) */
    GET_RESERVATION : `/api/admin/:reservationId`

    /** 선택 상품 조회 */
    // GET_
    /** 선택 상품 등록 */
    /** 선택 상품 삭제 */
}

// adminRouter.post(
//     extractPath(ADMIN_ROUTES.LOGOUT,ROUTES_INDEX.ADMIN_API),
//     adminController.logout
// )

export default adminRouter;