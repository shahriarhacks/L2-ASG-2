import express, { Application, Request, Response } from "express";
import cors from "cors";

const app: Application = express();

//Parser calling
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//CORS
app.use(cors());

//health route
app.get("/health", (_req: Request, res: Response) => {
   res.status(200).json({
      success: true,
      message: "Server Health are fine now! ",
   });
});
export default app;
