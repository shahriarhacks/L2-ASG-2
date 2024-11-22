import { NextFunction, Request, Response } from "express";
import { BicycleService } from "./bicycle.service";

const create = async (req: Request, res: Response, next: NextFunction) => {
   try {
      const result = await BicycleService.create({ ...req.body });
      res.status(201).json({
         status: true,
         message: "Bicycle created successfully",
         data: result,
      });
   } catch (error) {
      next(error);
   }
};

const readAll = async (req: Request, res: Response, next: NextFunction) => {
   try {
      const searchTerm = req.query.searchTerm as string | undefined;
      const result = await BicycleService.readAll(searchTerm);
      res.status(200).json({
         status: true,
         message: "Bicycles retrieved successfully",
         data: result,
      });
   } catch (error) {
      next(error);
   }
};

export const BicycleController = { create, readAll };
