export default class Hospital implements IHospital {
  id: string;
  name: string;
  email: string;
  password: string;
  address: string;
  phone: string;
  website: string | null;
  thumbnail: string;
  latitude: string;
  longitude: string;
  description: string;
  status: "ACTIVE" | "INACTIVE";
  // products: IProduct[];
  constructor(data: IHospital) {
    this.id = data.id;
    this.name = data.name;
    this.password = data.password;
    this.address = data.address;
    this.phone = data.phone;
    this.email = data.email;
    this.website = data.website;
    this.thumbnail = data.thumbnail;
    this.latitude = data.latitude;
    this.longitude = data.longitude;
    this.description = data.description;
    this.status = data.status;
    // this.products = data.products;
  }
}