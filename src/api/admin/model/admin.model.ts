export class Admin implements IAdmin {
  id?: string;
  email: string;
  password: string;
  name: string;
  role: "admin" | "hospital";
  hospital?:
    | hospital
    | {
        name: string;
        address: string;
        latitude: string;
        longitude: string;
        businessNumber: string;
        status: "active" | "inactive";
        product: IProduct[];
      };
  constructor(params: IAdmin) {
    this.id = params.id;
    this.email = params.email;
    this.password = params.password;
    this.name = params.name;
    this.role = params.role ?? "hospital";
    this.hospital = params.hospital;
  }
}
