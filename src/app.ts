import express, { NextFunction, Request, Response } from "express";
import path from "node:path";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import { ROUTES_INDEX } from "./api";
import hospitalRouter from "./api/hospiatl/router/hospital.router";

const app = express();
const port = process.env.PORT || 4000;

app.use(morgan("dev")); // 클로져
app.use("/static", express.static(path.join(__dirname, "../public")));

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.use(ROUTES_INDEX.HOSPITAL_API, hospitalRouter);

app.listen(port, () => {
  console.log(`SERVER started at http://localhost:${port} ^-^`);
});
