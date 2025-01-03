import { OrderResponseDTO } from "@/api/order/dto/orderResponse.dto";
import { GetOrderResponseDTO } from "@/api/order/dto/getOrderResponse.dto";
import { GetOrdersResponseDTO } from "@/api/order/dto/getOrdersResponse.dto";

export interface OrderService {
    createOrder(id: string, order: Omit<IOrder, "id" | "hospitalId" | "hospital" | "product" | "select_product">
    ): Promise<OrderResponseDTO>;
    
    getOrders(): Promise<GetOrdersResponseDTO[]>;
    
    getOrder(orderId: string): Promise<GetOrderResponseDTO | null>;
    
    updateOrder(
        orderId: string,
        params: Partial<Omit<IOrder, "id"> & {
            select_product: Omit<ISelectProduct, "id">[];
        }>
    ): Promise<void>;
    
    deleteOrder(orderId: string): Promise<void>;
}