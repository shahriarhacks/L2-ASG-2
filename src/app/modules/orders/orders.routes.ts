import { Router } from "express";
import { OrdersController } from "./orders.controller";

const router = Router();

router.post("/", OrdersController.create);

export const OrdersRouter = router;
