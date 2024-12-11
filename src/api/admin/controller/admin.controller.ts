// [관리자]
// 로그아웃 - logout

// 병원 목록 조회 - getHospitals
// 병원 상세 조회 - getHospital
// 병원 생성 - createHospital
// 병원 삭제 - deleteHospital

// 예약 목록 조회 - getOrders
// 예약 상세 조회 - getOrder

// 선택 상품 조회 - getSelectProducts
// 선택 상품 등록 - createSelectProduct
// 선택 상품 삭제 - deleteSelectProduct

import { NextFunction, Request, Response } from "express";
import { AdminService } from "@/api/admin/service/admin.service.type";

export default class AdminController {
    constructor(private _adminService: AdminService) {
        this.signup = this.signup.bind(this);
        // this.logout = this.logout.bind(this);

        // this.getHospitals = this.getHospitals.bind(this);
        // this.getHospital = this.getHospital.bind(this);
        // this.createHospital = this.createHospital.bind(this);
        // this.updateHospital = this.updateHospital.bind(this);
        // this.deleteHospital = this.deleteHospital.bind(this);

        // this.getOrders = this.getOrders.bind(this);
        // this.getOrder = this.getOrder.bind(this);

        // this.getSelectProducts = this.getSelectProducts.bind(this);
        // this.createSelectProduct = this.createSelectProduct.bind(this);
        // this.deleteSelectProduct = this.deleteSelectProduct.bind(this);
      }

    async signup(
        req: Request,
        res: Response
    ) {
        try {
            await this._adminService.signup({
                loginId: req.body.loginId,
                password: req.body.password,
                name: req.body.name,
            });
            res.status(201).json({ message: '회원가입 성공'});
        } catch (error) {
            res.status(400).json({ message: "회원가입 실패" });
        }
    }
    // async login()
    // async logout()

    // async getHospitals()
    // async getHospital()
    // async createHospital()
    // async updateHospital()
    // async deleteHospital()

    // async getOrders()
    // async getOrder()

    // async getSelectProducts()
    // async createSelectProduct()
    // async deleteSelectProduct()
}