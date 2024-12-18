import express from "express";
import path from "node:path";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import { ROUTES_INDEX } from "@/api/index";

import adminRouter from "@/api/admin/router/admin.router";
import prodcutRouter from "./api/product/router/product.router";
import errorHandler from "./api/common/middleware/errorHandler.middleware"; //errorhandler

const app = express();
const port = process.env.PORT || 6000;

app.use(morgan("dev"));
app.use("/static", express.static(path.join(__dirname, "../public")));

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

/** admin(hostpital) router */
app.use(ROUTES_INDEX.ADMIN_API, adminRouter);
/** product router */
app.use(ROUTES_INDEX.PRODUCT_API, prodcutRouter);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`SERVER started at http://localhost:${port} ^-^`);
});
