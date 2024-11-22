import { Router } from "express";
import { BicycleController } from "./bicycle.controller";

const router = Router();

router.post("/", BicycleController.create);
router.get("/", BicycleController.readAll);

export const BicycleRouter = router;