import { Router } from "express";
import { BicycleController } from "./bicycle.controller";

const router = Router();

router.route("/").post(BicycleController.create).get(BicycleController.readAll);

// router.post("/", BicycleController.create);
// router.get("/", BicycleController.readAll);

router
   .route("/:productId")
   .get(BicycleController.readSingle)
   .put(BicycleController.update)
   .delete(BicycleController.vanish);

// router.get("/:productId", BicycleController.readSingle);
// router.put("/:productId", BicycleController.update);

export const BicycleRouter = router;
