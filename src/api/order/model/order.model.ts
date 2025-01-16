export default class Order implements IOrder {
    id: string;
    user_name: string;
    user_tell: string;
    user_birth: string;
    user_address: string;
    user_gender: string;
    user_email: string;
    memo?: string;
    reservation_date: Date;
    reservation_time: string;
    status?: 'pending' | 'success' | 'cancel';
    
    total_price: number;
    productId: string;
    hospitalId: string;
    select_product?: string[];
    // hospital: IHospital;

    constructor(params: IOrder) {
        this.id = params.id;
        this.user_name = params.user_name;
        this.user_tell = params.user_tell;
        this.user_birth = params.user_birth;
        this.user_address = params.user_address;
        this.user_gender = params.user_gender;
        this.user_email = params.user_email;
        this.memo = params.memo;
        this.reservation_date = params.reservation_date;
        this.reservation_time = params.reservation_time;
        this.status = params.status;
        
        this.total_price = params.total_price;
        this.productId = params.productId;
        this.hospitalId = params.hospitalId;
        this.select_product = params.select_product;
        // this.hospital = params.hospital;
    }
}