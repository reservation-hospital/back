import { getHospitalResponseDTO } from "@/api/hospital/dto/hospitalResponse.dto";

export interface HospitalService {  
  createHospital(
    params: Omit<IHospital, "id" | "status">
  ): Promise<getHospitalResponseDTO>;
  
  loginHospital(
    email: string,
    password: string
  ): Promise<void>;
  
  logoutHospital(hospitalId: string): Promise<void>;
  
  getMyInfo(hospitalId?: string): Promise<{ result: getHospitalResponseDTO }>;

  updateHospital(
    hospitalId: string,
    params: Omit<IHospital, "id" | "status">
  ): Promise<void>;
}