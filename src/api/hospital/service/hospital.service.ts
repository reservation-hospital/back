// import HttpException from '@/api/common/exceptions/http.exception';
// import mongoose from "mongoose";
// import { HospitalRepository } from '@/api/hospital/repository/hospital.repository';
// import { HospitalService } from '@/api/hospital/service/hospital.service.type';
// import { getHospitalResponseDTO } from "@/api/hospital/dto/hospitalResponse.dto";

// export class HospitalServiceImpl implements HospitalService {
//     constructor(
//         private readonly _hospitalRepository: HospitalRepository
//     ) {}

//     async createHospital(params: Omit<IHospital, "id" | "status">): Promise<IHospital> {
//         try {
//             return await this._hospitalRepository.createHospital(params);
//         } catch (error) {
//             throw new HttpException(400, "병원 등록 실패");
//         }
    

//     async loginHospital(email: string, password: string): Promise<void> {}

//     async logoutHospital(hospitalId: string): Promise<void> {}

//     async getMyInfo(hospitalId?: string): Promise<{ result: getHospitalResponseDTO }> {
//         try {
//             const hospital = await this._hospitalRepository.getHospital(hospitalId);
//             return { result: hospital };
//         } catch (error) {
//             throw new HttpException(400, "병원 정보 조회 실패");
//         }
//     }

//     async updateHospital(hospitalId: string, params: Omit<IHospital, "id" | "status">): Promise<void> {
//         try {
//             await this._hospitalRepository.updateHospital(hospitalId, params);
//         } catch (error) {
//             throw new HttpException(400, "병원 정보 수정 실패");
//         }
//     }
// }