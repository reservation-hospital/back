export class Admin implements IAdmin {
    id: String;
    email: String;
    password: String;
    name: String;
    role: RoleType;
    hospital: IHospital;

    constructor(params: IAdmin) {
        this.id = params.id;
        this.email = params.email;
        this.password = params.password;
        this.name = params.name;
        this.role = params.role;
        this.hospital = params.hospital;
    }
}