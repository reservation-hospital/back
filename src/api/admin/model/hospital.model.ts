export class Hospital implements IHospital {
    id: string;
    email: string;
    password: string;
    name: string;
    address: string;
    latitude: string;
    longitude: string;
    businessNumber: string;
    status: "active" | "inactive";
    role?: role;
    order?: IOrder[];
  
    constructor(params: IHospital) {
      this.id = params.id;
      this.email = params.email;
      this.password = params.password;
      this.name = params.name;
      this.address = params.address;
      this.latitude = params.latitude;
      this.longitude = params.longitude;
      this.businessNumber = params.businessNumber;
      this.status = params.status;
      this.role = params.role;
      this.order = params.order;
    }
  }