// 병원 가입 DTO
export class HospitalResponseDTO {
  name: string;
  email: string;
  password: string;
  address: string;
  phone: string;
  website?: string;
  thumbnail?: string;
  latitude: string;
  longitude: string;
  description: string;
  status?: "ACTIVE" | "INACTIVE";

  constructor(hospital: IHospital) {
    this.name = hospital.name;
    this.email = hospital.email;
    this.password = hospital.password;
    this.address = hospital.address;
    this.phone = hospital.phone;
    this.website = hospital.website;
    this.thumbnail = hospital.thumbnail;
    this.latitude = hospital.latitude;
    this.longitude = hospital.longitude;
    this.description = hospital.description;
    this.status = hospital.status;
  }
}