import { Request, Response, NextFunction } from "express";
import { environment } from "../../config/environment";

export const globalErrorHandler = (
   error: any,
   _req: Request,
   res: Response,
   _next: NextFunction,
) => {
   const statusCode = error.statusCode || 500;
   res.status(statusCode).json({
      message: error.message || "Internal Server Error",
      success: false,
      error: error.errors || error.message,
      stack: environment.env === "production" ? null : error.stack,
   });
};
