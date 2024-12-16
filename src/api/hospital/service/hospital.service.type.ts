import { GetHospitalResponseDTO } from "@/api/hospital/dto/getHospitalResponse.dto";
import { GetHospitalsResponseDTO } from "@/api/hospital/dto/getHospitalsResponse.dto";
import { HospitalResponseDTO } from "@/api/hospital/dto/hospitalResponse.dto";

export interface HospitalService {  
  createHospital(
    params: Omit<IHospital, "id" | "status">
  ): Promise<HospitalResponseDTO>;
  
  loginHospital(
    email: string,
    password: string
  ): Promise<void>;

  checkHospitalEmail(email: string): Promise<boolean>;
  
  logoutHospital(hospitalId: string): Promise<void>;

  getHospitals(): Promise<GetHospitalsResponseDTO[]>;  

  getHospital(hospitalId: string): Promise<GetHospitalResponseDTO | null>;  

  updateHospital(
    hospitalId: string,
    params: Partial<
      Omit<IHospital, "id" | "status">
    >
  ): Promise<void>;
}