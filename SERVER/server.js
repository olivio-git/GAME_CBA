import { Router } from "express";
import userRouter from "./src/routes/userRoute.js";

const server = Router();

server.use("/user", userRouter);

export default server;
