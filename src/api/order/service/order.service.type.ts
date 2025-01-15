// import { OrderResponseDTO } from "@/api/order/dto/orderResponse.dto";
// import { GetOrderResponseDTO } from "@/api/order/dto/getOrderResponse.dto";
// import { GetOrdersResponseDTO } from "@/api/order/dto/getOrdersResponse.dto";

export interface OrderService {
    createOrder(order: Omit<IOrder, "id" | "hospitalId">
    ): Promise<IOrder>;
    
    getOrders(): Promise<IOrder[]>;
    
    getOrder(orderId: string): Promise<IOrder | null>;
    
    updateOrder(
        orderId: string,
        // params: Partial<Omit<IOrder, "id"> & {
        //     select_product: Omit<ISelectProduct, "id">[];
        // }>
        params: Omit<IOrder, "id">
    ): Promise<void>;
    
    deleteOrder(orderId: string): Promise<void>;
}