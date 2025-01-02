import { Request, Response, NextFunction } from "express";
import { OrderService } from "@/api/order/service/order.service.type";

export default class OrderController {
    constructor(private readonly _orderService: OrderService) {
        this.createOrder = this.createOrder.bind(this);
        this.updateOrder = this.updateOrder.bind(this);
        this.deleteOrder = this.deleteOrder.bind(this);
        this.getOrders = this.getOrders.bind(this);
        this.getOrder = this.getOrder.bind(this);
    }

    /** 주문 생성 */
    async createOrder(req: Request, res: Response, next: NextFunction) {
        try {
            const order = await this._orderService.createOrder(req.admin.id,{
                user_name: req.body.name,
                user_tell: req.body.phone,
                user_birth: req.body.birth,
                user_address: req.body.address,
                user_gender: req.body.gender,
                user_email: req.body.email,
                total_price: req.body.price,
                memo: req.body.memo,
                reservation_date: req.body.date,
                reservation_time: req.body.time,
                status: req.body.status,
                // hospitalId: req.body.hospital,
                // productId: req.body.product,
                // select_product: req.body.select_product
            });
            res.status(200).json(order);
        } catch (error) {
            console.log(error);
            res.status(409).json({ message: "주문 생성 실패" });
        }
    }

    /** 주문 수정 */
    async updateOrder(req: Request, res: Response, next: NextFunction) {
        try {      
            const { orderId } = req.params;
            const updateData = req.body;
        
            const order = await this._orderService.updateOrder(orderId, updateData);
        
              res.status(200).json({
                message: "주문 수정 성공",
                data: order,
              });
            } catch (error) {
              res.status(409).json({ message: "주문 수정 실패" });
            }
    }    

    /** 주문 삭제 */
    async deleteOrder(req: Request, res: Response, next: NextFunction) {
        try {
            const {orderId} = req.params;
            await this._orderService.deleteOrder(orderId);

            res.status(200).json({ message: "주문 삭제 성공" });
        } catch (error) {
            res.status(404).json({ message: "주문 삭제 실패" });
        }
    }

    /** 주문 조회 */
    async getOrders(req: Request, res: Response, next: NextFunction) {
        try {
            const orders = await this._orderService.getOrders();

            res.status(200).json({
                message: "주문 조회 성공",
                data: orders,
            });
        } catch (error) {
            res.status(400).json({ message: "주문 목록 조회 실패" });
            next(error);
        }
    }

    /** 주문 상세 조회 */
    async getOrder(req: Request, res: Response, next: NextFunction) {
        try {
            const {orderId} = req.params;
      
            const order = await this._orderService.getOrder(orderId);
      
            res.status(200).json({
              message: "주문 조회 성공",
              data: order,
            });
          } catch (error) {
            res.status(404).json({ message: "주문 조회 실패" });
          }
    }
}