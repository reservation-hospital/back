import dotenv from "dotenv";
import path from "node:path";

dotenv.config({
  path: path.join(__dirname, ".env"),
});

export const envs = {
  PORT: process.env.PORT,
  MONGODB_USER: process.env.MONGODB_USER,
  MONGODB_PASSWORD: process.env.MONGODB_PASSWORD,
  MONGODB_CLUSTER: process.env.MONGODB_CLUSTER,
};
