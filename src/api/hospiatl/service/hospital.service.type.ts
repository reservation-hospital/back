import { getHospitalResponseDTO } from "../dto/hospitalResponse.dto";

export interface HospitalService {
  myHospital(id?: string): Promise<{ result: getHospitalResponseDTO }>;

  createHospital(
    params: Omit<IHospital, "id" | "status">
  ): Promise<getHospitalResponseDTO>;

  loginHospital(
    email: string,
    password: string
  ): Promise<{ accessToken: string; refreshToken: string }>;

  logoutHospital(hid: string): Promise<void>;

  updateHospital(
    hid: string,
    params: Omit<IHospital, "id" | "status">
  ): Promise<void>;
}
