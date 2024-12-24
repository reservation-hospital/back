export class Admin implements IAdmin {
  id: string;
  email: string;
  password: string;
  name: string;
  role: "admin";
  hospital?: IHospital[];
  order?: IOrder[];

  constructor(params: IAdmin) {
    this.id = params.id;
    this.email = params.email;
    this.password = params.password;
    this.name = params.name;
    this.role = "admin";
    this.hospital = params.hospital;
  }
}