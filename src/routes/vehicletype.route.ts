import { Router } from "express";
import {
  getAllStatus,
  addStatus,
  getStatus,
  removeStatus,
  updateStatus,
} from "../controller/vehicletype.controller";

const router = Router();

router.get("/", getAllStatus);
router.get("/:id", getStatus);
router.post("/", addStatus);
router.put("/:id", updateStatus);
router.delete("/:id", removeStatus);

module.exports = router;
