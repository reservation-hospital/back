import express, { NextFunction, Request, Response } from "express";
import path from "node:path";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import { ROUTES_INDEX } from "@/api/index";
import adminRouter from "@/api/admin/router/admin.router";

const app = express();
const port = process.env.PORT || 6000;

app.use(morgan("dev")); // 클로져
app.use("/static", express.static(path.join(__dirname, "../public")));

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

// app.set("views", path.join(__dirname, "views"));

app.use(ROUTES_INDEX.ADMIN_API, adminRouter);

app.listen(port, () => {
  console.log(`SERVER started at http://localhost:${port} ^-^`);
});
