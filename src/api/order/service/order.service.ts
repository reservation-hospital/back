import HttpException from '@/api/common/exceptions/http.exception';
import mongoose from "mongoose";
import { OrderRepository } from '@/api/order/repository/order.repository';
import { OrderService } from '@/api/order/service/order.service.type';
import { OrderResponseDTO } from '@/api/order/dto/orderResponse.dto';
import { GetOrderResponseDTO } from '@/api/order/dto/getOrderResponse.dto';
import { GetOrdersResponseDTO } from '@/api/order/dto/getOrdersResponse.dto';

export class OrderServiceImpl implements OrderService {
    constructor(
        private readonly _orderRepository: OrderRepository
    ) {}

    async createOrder(params: Omit<IOrder, "id">): Promise<OrderResponseDTO> {
        try {
            const order = await this._orderRepository.createOrder(params);
            return new OrderResponseDTO(order);
        } catch (error) {
            throw new HttpException(400, "예약 생성 실패");
        }
    }    

    async getOrders(): Promise<GetOrdersResponseDTO[]> {
        const orders = await this._orderRepository.findAll();

        const newList = await Promise.all(
            orders.map((order)=>new GetOrdersResponseDTO(order))
        );

        return newList;
    }

    async getOrder(orderId: string): Promise<GetOrderResponseDTO | null> {
        const order = await this._orderRepository.findById(orderId);

        if(!order) {
            throw new HttpException(404, "예약 정보 조회 실패");
        }

        const orderList = await new GetOrderResponseDTO(order);

        return orderList;
    }

    async updateOrder(orderId: string, params: Partial<Omit<IOrder, "id">>): Promise<void> {
        const findOrder = await this._orderRepository.findById(orderId);
        
        if(!findOrder) {
            throw new HttpException(404, "예약 정보 조회 실패");
        }
        
        await this._orderRepository.updateOrder(orderId, params);

        return;
    }

    async deleteOrder(orderId: string): Promise<void> {
        await this._orderRepository.deleteOrder(orderId);
    }
}