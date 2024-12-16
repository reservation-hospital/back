// 병원 목록 조회 DTO
export class GetHospitalsResponseDTO {
    hospitalId: string;
    name: string;
    email: string;
    address: string;
    phone: string;
    website?: string;
    thumbnail?: string;
    latitude: string;
    longitude: string;
    status?: "ACTIVE" | "INACTIVE";
  
    constructor(hospital: IHospital) {
      this.hospitalId = hospital.id;
      this.name = hospital.name;
      this.email = hospital.email;
      this.address = hospital.address;
      this.phone = hospital.phone;
      this.website = hospital.website;
      this.thumbnail = hospital.thumbnail;
      this.latitude = hospital.latitude;
      this.longitude = hospital.longitude;
      this.status = hospital.status;
    }
  }