export declare class Admin implements IAdmin {
    id: string;
    email: string;
    password: string;
    name: string;
    role?: role;
    hospital?: IHospital;
    products?: IProduct[];
    orders?: IOrder[];
    selectProducts?: ISelectProduct[];
    constructor(params: IAdmin);
}
