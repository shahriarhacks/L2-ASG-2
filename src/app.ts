import express, { Application, Request, Response } from "express";
import cors from "cors";
import { globalErrorHandler } from "./app/middleware/globalErrorHandler";
import { notFoundRoute } from "./app/middleware/notFoundRoute";
import { BicycleRouter } from "./app/modules/bicycle/bicycle.routes";
import { OrdersRouter } from "./app/modules/orders/orders.routes";

const app: Application = express();

//Parser calling
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//CORS
app.use(cors());

//Application route
app.use("/api/products", BicycleRouter);
app.use("/api/orders", OrdersRouter);

//health route
app.get("/health", (_req: Request, res: Response) => {
   res.status(200).json({
      success: true,
      message: "Server Health are fine now! ",
   });
});

//Global Error Handler
app.use(globalErrorHandler);
//Not Found Route
app.use("*", notFoundRoute);

export default app;
