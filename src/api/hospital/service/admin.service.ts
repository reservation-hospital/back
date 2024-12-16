// import HttpException from '@/api/common/exceptions/http.exception';
// import mongoose from "mongoose";
// import { AdminRepository } from "@/api/hospital/repository/admin.repository";
// import { AdminService } from "@/api/hospital/service/admin.service.type";

// export class AdminServiceImpl implements AdminService {
//     constructor(
//         private readonly _adminRepository: AdminRepository
//     ) {}

//     async signup(params: Omit<IAdmin, "id">) {
//         try {
//             return await this._adminRepository.signup(params);
//         } catch (error) {
//             throw new HttpException(400, "회원가입 실패");
//         }
//     }
// }