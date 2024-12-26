export class Hospital implements IHospital {
    name: string;
    address: string;
    latitude: string;
    longitude: string;
    businessNumber: string;
    status: "active" | "inactive";
    role: "hospital";
    order?: IOrder[];
  
    constructor(params: IHospital) {
      this.name = params.name;
      this.address = params.address;
      this.latitude = params.latitude;
      this.longitude = params.longitude;
      this.businessNumber = params.businessNumber;
      this.status = params.status;
      this.role = "hospital";
      this.order = params.order;
    }
  }