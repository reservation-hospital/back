import HttpException from '@/api/common/exceptions/http.exception';
import mongoose from "mongoose";
import { HospitalRepository } from '@/api/hospital/repository/hospital.repository';
import { HospitalService } from '@/api/hospital/service/hospital.service.type';
import { GetHospitalResponseDTO } from "@/api/hospital/dto/getHospitalResponse.dto";
import { GetHospitalsResponseDTO } from "@/api/hospital/dto/getHospitalsResponse.dto";
import { HospitalResponseDTO } from "@/api/hospital/dto/hospitalResponse.dto";

export class HospitalServiceImpl implements HospitalService {
    constructor(
        private readonly _hospitalRepository: HospitalRepository
    ) {}

    async createHospital(params: Omit<IHospital, "id" | "status">): Promise<HospitalResponseDTO> {
        try {
            const hospital = await this._hospitalRepository.createHospital(params);
            return new HospitalResponseDTO(hospital);
        } catch (error) {
            throw new HttpException(400, "병원 등록 실패");
        }
    }    

    async loginHospital(email: string, password: string): Promise<void> {
        const findHospital = await this._hospitalRepository.findByEmail(email);

        if(!findHospital) {
            throw new HttpException(401, "존재하지 않는 병원입니다.");
        }

        if(password !== findHospital.password) {
            throw new HttpException(401, "비밀번호가 일치하지 않습니다.");
        }

        return;
    }

    async checkHospitalEmail(email: string): Promise<boolean> {
        const hospital = await this._hospitalRepository.findByEmail(email);
        return !!hospital;
    }

    async logoutHospital(hospitalId: string): Promise<void> {}

    async getHospitals(): Promise<GetHospitalsResponseDTO[]> {
        const hospitals = await this._hospitalRepository.findAll();

        const newList = await Promise.all(
            hospitals.map((hospital)=>new GetHospitalsResponseDTO(hospital))
        );

        return newList;
    }

    async getHospital(hospitalId: string): Promise<GetHospitalResponseDTO | null> {
        const hospital = await this._hospitalRepository.findById(hospitalId);

        if(!hospital) {
            throw new HttpException(404, "병원 정보 조회 실패");
        }

        const dtoHospital = await new GetHospitalResponseDTO(hospital);

        return dtoHospital;
    }

    async updateHospital(hospitalId: string, params: Partial<IHospital>): Promise<void> {
        const findHospital = await this._hospitalRepository.findById(hospitalId);

        if(!findHospital) {
            throw new HttpException(404, "병원이 존재하지 않습니다.");
        }

        await this._hospitalRepository.updateHospital(hospitalId, params);

        return;
    }
}