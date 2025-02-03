import HttpException from "@/api/common/exceptions/http.exception";
import { OrderRepository } from "@/api/order/repository/order.repository";
import { AdminRepository } from "@/api/admin/repository/admin.repository";
import { ProductRepository } from "@/api/product/repository/product.repository";
import { SelectProductRepository } from "@/api/selectProduct/repository/selectProduct.repository";
import { OrderService } from "@/api/order/service/order.service.type";
import { ObjectId } from "mongodb";
// import { OrderResponseDTO } from "@/api/order/dto/orderResponse.dto";
// import { GetOrderResponseDTO } from "@/api/order/dto/getOrderResponse.dto";
// import { GetOrdersResponseDTO } from "@/api/order/dto/getOrdersResponse.dto";

export class OrderServiceImpl implements OrderService {
  constructor(
    private readonly _orderRepository: OrderRepository,
    private readonly _adminRepository: AdminRepository,
    private readonly _productRepository: ProductRepository,
    private readonly _selectProductRepository: SelectProductRepository
  ) {}

  async createOrder(order: Omit<IOrder, "id" | "hospitalId">): Promise<IOrder> {
    const product = await this._productRepository.findById(order.productId);

    if (!product) {
      throw new HttpException(404, "상품을 찾을 수 없습니다.");
    }

    const selectedProducts = order.select_product
      ? await Promise.all(
          order.select_product.map(async (productId) => {
            const selectedProduct =
              await this._selectProductRepository.findById(productId);
            if (!selectedProduct) {
              throw new HttpException(
                404,
                `선택 상품 ID ${productId}를 찾을 수 없습니다.`
              );
            }
            return selectedProduct;
          })
        )
      : [];

    const totalPrice =
      product.price + selectedProducts.reduce((sum, p) => sum + p.price, 0);

    const newOrder: IOrder = {
      id: "",
      user_name: order.user_name,
      user_tell: order.user_tell,
      user_birth: order.user_birth,
      user_address: order.user_address,
      user_gender: order.user_gender,
      user_email: order.user_email,
      memo: order.memo,
      reservation_date: order.reservation_date,
      reservation_time: order.reservation_time,
      status: "pending",
      total_price: totalPrice,
      productId: order.productId,
      hospitalId: product.hospitalId,
      select_product: order.select_product,
      // hospitalId: id,
      // hospital: order.hospital,
    };

    const savedOrder = await this._orderRepository.save(newOrder);

    const findAdmin = await this._adminRepository.findById(product.hospitalId);

    if (!findAdmin) {
      throw new HttpException(409, "존재하지 않는 병원입니다.");
    }

    const updatedOrder = findAdmin.orders
      ? findAdmin.orders.concat(savedOrder)
      : [savedOrder];

    await this._adminRepository.update(product.hospitalId, {
      orders: updatedOrder,
    });

    return savedOrder;
  }

  async getOrders(): Promise<IOrder[]> {
    const orders = await this._orderRepository.findAll();
    return orders;
  }

  // async getOrder(orderId: string): Promise<IOrder | null> {
  //   const order = await this._orderRepository.findById(orderId);

  //   if (!order) {
  //     throw new HttpException(404, "예약 정보 조회 실패");
  //   }

  //   return order;
  // }
  async getOrder(user_tell: string, email: string): Promise<IOrder[]> {
    if (user_tell) {
      const orders = await this._orderRepository.findByTell(user_tell);
      if (orders.length === 0) {
        throw new HttpException(
          404,
          "해당 휴대폰 번호로 조회된 예약 내역이 없습니다."
        );
      }
      return orders;
    } else if (email) {
      const orders = await this._orderRepository.findByEmail(email);
      if (orders.length === 0) {
        throw new HttpException(
          404,
          "해당 이메일로 조회된 예약 내역이 없습니다."
        );
      }
      return orders;
    } else {
      throw new HttpException(404, "주문 정보 조회 실패");
    }
  }

  async updateOrder(
    orderId: string,
    // params: Partial<Omit<IOrder, "id">>
    params: Omit<IOrder, "id">
  ): Promise<void> {
    const findOrder = await this._orderRepository.findById(orderId);

    if (!findOrder) {
      throw new HttpException(404, "예약 정보 조회 실패");
    }

    await this._orderRepository.update(orderId, params);

    return;
  }

  async deleteOrder(orderId: string): Promise<void> {
    const findOrder = await this._orderRepository.findById(orderId);

    if (!findOrder) {
      throw new HttpException(404, "예약을 찾을 수 없습니다.");
    }

    const findAdmin = await this._adminRepository.findById(
      findOrder.hospitalId
    );

    if (!findAdmin) {
      throw new HttpException(409, "존재하지 않는 병원입니다.");
    }

    const updatedOrders = (findAdmin.orders || []).filter((p) => {
      return (
        new ObjectId(p.id).toString() !== new ObjectId(findOrder.id).toString()
      );
    });

    await this._adminRepository.update(findAdmin.id, { orders: updatedOrders });

    await this._orderRepository.delete(orderId);
  }
}
