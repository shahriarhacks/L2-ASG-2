import { NextFunction, Request, Response } from "express";

const notFound = (_req: Request, res: Response, _next: NextFunction) => {
   return res.status(404).json({
      success: false,
      message: "API Not Found !!",
      error: "Requesting route are't exist on our server!",
   });
};

export default notFound;
