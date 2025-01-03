import express from "express";
import path from "node:path";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import { ROUTES_INDEX } from "@/api/index";

import adminRouter from "@/api/admin/router/admin.router";
import hospitalRouter from "@/api/admin/router/hospital.router";
import productRouter from "@/api/product/router/product.router";
import selectProductRouter from "@/api/selectProduct/router/selectProduct.router";
import orderRouter from "@/api/order/router/order.router";
import authRouter from "@/api/auth/router/auth.router";
import errorHandler from "./api/common/middleware/errorHandler.middleware"; //errorhandler

const app = express();
const port = process.env.PORT || 6000;

app.use(morgan("dev"));
app.use("/static", express.static(path.join(__dirname, "../public")));

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

/** product router */
app.use(ROUTES_INDEX.PRODUCT_API, productRouter);
/** admin router */
app.use(ROUTES_INDEX.ADMIN_API, adminRouter);
/** hospital router */
app.use(ROUTES_INDEX.HOSPITAL_API, hospitalRouter);
/** select product router */
app.use(ROUTES_INDEX.SELECT_PRODUCT_API, selectProductRouter);
/** order router */
app.use(ROUTES_INDEX.ORDER_API, orderRouter);
/** auth router */
app.use(ROUTES_INDEX.AUTH_API, authRouter);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`SERVER started at http://localhost:${port} ^-^`);
});
