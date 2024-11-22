import { NextFunction, Request, Response } from "express";
import { OrdersService } from "./orders.service";

const create = async (req: Request, res: Response, next: NextFunction) => {
   try {
      const result = await OrdersService.create({ ...req.body });
      res.status(201).json({
         status: true,
         message: "Order created successfully",
         data: result,
      });
   } catch (error) {
      next(error);
   }
};

export const OrdersController = { create };
