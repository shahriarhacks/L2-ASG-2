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

const readSingle = async (req: Request, res: Response, next: NextFunction) => {
   try {
      const id = req.params.productId;
      const result = await BicycleService.readSingle(id);
      res.status(200).json({
         status: true,
         message: "Bicycle retrieved successfully",
         data: result,
      });
   } catch (error) {
      next(error);
   }
};

const update = async (req: Request, res: Response, next: NextFunction) => {
   try {
      const id = req.params.productId;
      const result = await BicycleService.update(id, { ...req.body });
      res.status(201).json({
         status: true,
         message: "Bicycle updated successfully",
         data: result,
      });
   } catch (error) {
      next(error);
   }
};

const vanish = async (req: Request, res: Response, next: NextFunction) => {
   try {
      const id = req.params.productId;
      const result = await BicycleService.vanish(id);
      if (Object.keys(result).length === 0) {
         throw new Error("Bicycle not found");
      }
      if (!result.acknowledged && result.deletedCount === 0) {
         throw new Error("Bicycle not found");
      }

      res.status(200).json({
         status: true,
         message: "Bicycle deleted successfully",
         data: {},
      });
   } catch (error) {
      next(error);
   }
};

export const BicycleController = {
   create,
   readAll,
   readSingle,
   update,
   vanish,
};
