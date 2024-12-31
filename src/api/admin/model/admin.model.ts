export class Admin implements IAdmin {
  id: string;
  email: string;
  password: string;
  name: string;
  role?: role;
  hospital?: IHospital[];
  order?: IOrder[];

  constructor(params: IAdmin) {
    this.id = params.id;
    this.email = params.email;
    this.password = params.password;
    this.name = params.name;
    this.role = params.role;
    this.hospital = params.hospital;
    this.order = params.order;
  }
}