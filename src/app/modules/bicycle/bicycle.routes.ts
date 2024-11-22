import { Router } from "express";
import { BicycleController } from "./bicycle.controller";

const router = Router();

router.post("/", BicycleController.create);
router.get("/", BicycleController.readAll);

router.get("/:productId", BicycleController.readSingle);
router.put("/:productId", BicycleController.update);

export const BicycleRouter = router;
