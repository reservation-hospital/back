import HttpException from "@/api/common/exceptions/http.exception";
import { OrderRepository } from "@/api/order/repository/order.repository";
import { MongooseOrder } from "@/api/order/model/order.schema";

export class MongooseOrderRepository implements OrderRepository {
   async createOrder(order: Omit<IOrder, "id">): Promise<IOrder> {
        const newOrder = new MongooseOrder(order);

        await newOrder.save();
        
        return newOrder;
    }

    async findAll(): Promise<IOrder[]> {
        const values = await MongooseOrder.find();

        return values;
    }

    async findById(orderId: string): Promise<IOrder | null> {
        return MongooseOrder.findById(orderId);
    }

    async updateOrder(orderId: string, updateOrderInfo: Partial<IOrder>): Promise<IOrder> {
        const updateOrder = await MongooseOrder.findByIdAndUpdate(orderId, updateOrderInfo);
        
        if (!updateOrder) {
            throw new HttpException(404, "주문을 찾을 수 없습니다.");
          }

        return updateOrder;
    }

    async deleteOrder(orderId: string): Promise<void> {
        await MongooseOrder.findByIdAndDelete(orderId);

        return;
    }
}