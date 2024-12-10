import express from "express";
import { extractPath } from "@/utils/path.util";
import HospitalContoller from "../controller/hospital.controller";

const hospitalRouter = express.Router();
const hospitalController = new HospitalContoller();

const HOSPITAL_ROUTER = {};

/** 병원 상세 조회 */
hospitalRouter.get("/api/hospital/:hid", hospitalController.getHospital);
/** 병원 생성 */
hospitalRouter.post("/api/hospital", hospitalController.createHospital);
/** 병원 수정 */
hospitalRouter.put("/api/hospital/:hid", hospitalController.updateHospital);
