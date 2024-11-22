import { Router } from "express";
import { BicycleController } from "./bicycle.controller";

const router = Router();

router.post("/", BicycleController.create);

export const BicycleRouter = router;
