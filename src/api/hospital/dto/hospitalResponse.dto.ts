export class getHospitalResponseDTO {
  id?: string;
  name: string;
  email: string;
  password: string;
  address: string;
  phone: string;
  website?: string | null;
  thumbnail?: string;
  latitude: string;
  longitude: string;
  description: string;
  status?: "ACTIVE" | "INACTIVE";

  constructor(params: IHospital) {
    this.id = params.id;
    this.name = params.name;
    this.email = params.email;
    this.password = params.password;
    this.address = params.address;
    this.phone = params.phone;
    this.website = params.website;
    this.thumbnail = params.thumbnail;
    this.latitude = params.latitude;
    this.longitude = params.longitude;
    this.description = params.description;
    this.status = params.status;
  }
}
