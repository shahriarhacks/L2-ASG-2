import { NextFunction, Request, Response } from "express";
import { BicycleService } from "./bicycle.service";

const create = async (req: Request, res: Response, next: NextFunction) => {
   try {
      const result = await BicycleService.create({ ...req.body });
      res.status(201).json({
         success: true,
         message: "Bicycle created successfully",
         data: result,
      });
   } catch (error) {
      next(error);
   }
};

export const BicycleController = { create };
