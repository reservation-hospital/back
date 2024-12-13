export default class Hospital implements IHospital {
  // model 정의할 때는 소문자로 작성
  id: string;
  name: string;
  email: string;
  password: string;
  address: string;
  phone: string;
  website?: string | undefined;
  thumbnail: string;
  latitude: string;
  longitude: string;
  description: string;
  status: "ACTIVE" | "INACTIVE";
  // products: IProduct[];

  constructor(params: IHospital) {
    this.id = params.id;
    this.name = params.name;
    this.password = params.password;
    this.address = params.address;
    this.phone = params.phone;
    this.email = params.email;
    this.website = params.website;
    this.thumbnail = params.thumbnail;
    this.latitude = params.latitude;
    this.longitude = params.longitude;
    this.description = params.description;
    this.status = params.status;
    // this.products = params.products;
  }
}
