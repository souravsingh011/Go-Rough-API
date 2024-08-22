import { Router } from "express";
import { getAllStatus } from "../controller/place.controller"; // Check this path
import {
  addStatus,
  getStatus,
  removeStatus,
  updateStatus,
} from "../controller/place.controller";

const router = Router();

router.get("/", getAllStatus);
router.get("/:id", getStatus);
router.post("/", addStatus);
router.put("/:id", updateStatus);
router.delete("/:id", removeStatus);

module.exports = router;
