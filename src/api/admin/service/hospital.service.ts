import HttpException from "@/api/common/exceptions/http.exception";
import { HospitalService } from "@/api/admin/service/hospital.service.type";
import { HospitalRepository } from "@/api/admin/repository/hospital.repository";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";

export class HospitalServiceImpl implements HospitalService {
  constructor(
    private readonly _hospitalRepository: HospitalRepository
  ) {}

  /** 회원가입(role = admin, hospital) */
  async signUp(params: Omit<IHospital, "id">): Promise<IHospital> {
    try {
        const findHospital = await this._hospitalRepository.findByEmail(params.email);
        
        if (findHospital) {
          throw new HttpException(409, "이미 존재하는 이메일입니다.");
        }
  
        const saltedPassword = await bcrypt.hash(params.password, 12);
  
        const newHospital = await this._hospitalRepository.signup({
          ...params,
          password: saltedPassword,
          role: "hospital",
        });
  
        return newHospital;
  
      } catch (error) {
        console.log(error);
        throw error;
      }
  }

  /** 병원 수정(role = hospital) */
  async updateHospital(id: string, params: Partial<Omit<IHospital, "id" | "order">>): Promise<void> {
    const findHospital = await this._hospitalRepository.findById(id);

    if (!findHospital) {
      throw new HttpException(404, "해당 병원은 존재하지 않습니다.");
    }

    const updatedHospital = await this._hospitalRepository.updateHospital(id, {...params});

    return updatedHospital;
  }

  /** 병원 삭제(role = hospital) */
  async deleteHospital(id: string): Promise<void> {
    const hospital = await this._hospitalRepository.findById(id);
    if (!hospital) {
      throw new HttpException(404, "해당 병원은 존재하지 않습니다.");
    }

    await this._hospitalRepository.deleteHospital(id);
  }

  /** 병원 상세 조회(role = hospital) */
  async getHospital(id: string): Promise<IHospital> {
    const hospital = await this._hospitalRepository.getHospital(id);
    if (!hospital) {
      throw new HttpException(404, "해당 병원은 존재하지 않습니다.");
    }
    return hospital;
  }
}