import express, { NextFunction, Request, Response } from "express";
import path from "node:path";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import { ROUTES_INDEX } from "@/api/index";

import hospitalRouter from "./api/hospital/router/hospital.router";
// import adminRouter from "@/api/hospital/router/admin.router";

const app = express();
const port = process.env.PORT || 6000;

app.use(morgan("dev")); // 클로져
app.use("/static", express.static(path.join(__dirname, "../public")));

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));


app.use(ROUTES_INDEX.HOSPITAL_API, hospitalRouter);
// app.use(ROUTES_INDEX.ADMIN_API, adminRouter);


app.listen(port, () => {
  console.log(`SERVER started at http://localhost:${port} ^-^`);
});
