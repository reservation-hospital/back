import HttpException from "@/api/common/exceptions/http.exception";
import { OrderRepository } from "@/api/order/repository/order.repository";
import { MongooseOrder } from "@/api/order/model/order.schema";

export class MongooseOrderRepository implements OrderRepository {
  async save(order: Omit<IOrder, "id">): Promise<IOrder> {
    const newOrder = new MongooseOrder(order);
    await newOrder.save();
    return newOrder;
  }

  async findAll(): Promise<IOrder[]> {
    const values = await MongooseOrder.find()
      .populate({
        path: "productId",
        select: "name price",
      })
      .populate({
        path: "hospitalId",
        select: "hospitalName",
      })
      .populate({
        path: "select_product",
        select: "name price",
      })
      .exec();
    return values;
  }

  async findById(orderId: string): Promise<IOrder | null> {
    const order = MongooseOrder.findById(orderId)
      .populate({
        path: "productId",
        select: "name price",
      })
      .populate({
        path: "hospitalId",
        select: "hospitalName",
      })
      .populate({
        path: "select_product",
        select: "name price",
      })
      .exec();
    return order;
  }

  async findByTell(user_tell: string): Promise<IOrder[]> {
    const order = MongooseOrder.find({ user_tell }).populate({
      path: "hospitalId",
      select: "id hospitalName",
    });
    return order;
  }

  async findByEmail(user_email: string): Promise<IOrder[]> {
    const order = MongooseOrder.find({ user_email });
    return order;
  }

  async update(
    orderId: string,
    updateOrderInfo: Omit<IOrder, "id">
  ): Promise<void> {
    const updateOrder = await MongooseOrder.findByIdAndUpdate(
      orderId,
      updateOrderInfo
    );

    if (!updateOrder) {
      throw new HttpException(404, "주문을 찾을 수 없습니다.");
    }

    return;
  }

  async delete(orderId: string): Promise<void> {
    await MongooseOrder.deleteOne({ _id: orderId });
    return;
  }
}
