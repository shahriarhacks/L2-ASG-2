import { Router } from "express";
import { OrdersController } from "./orders.controller";

const router = Router();

router.post("/", OrdersController.create);
router.get("/revenue", OrdersController.checkRevenue);

export const OrdersRouter = router;
