// 예약 목록 조회 DTO
export class GetOrdersResponseDTO {
    orderId: string;
    user_name: string;
    user_tell: string;
    reservation_date: Date;
    reservation_time: string;
    status?: 'pending' | 'success' | 'cancel';
    // hospital: IHospital;
    // product: IProduct;
    // select_product?: ISelectProduct;

    constructor(order: IOrder) {
        this.orderId = order.id;
        this.user_name = order.user_name;
        this.user_tell = order.user_tell;
        this.reservation_date = order.reservation_date;
        this.reservation_time = order.reservation_time;
        this.status = order.status;
        // this.hospital = order.hospital;
        // this.product = order.product;
        // this.select_product = order.select_product;
    }
}