import { Router } from "express";
import {
  getAllStatus,
  getStatus,
  addStatus,
  updateStatus,
  removeStatus,
} from "../controller/country.controller"; // Check this path

const router = Router();

router.get("/", getAllStatus);
router.get("/:id", getStatus);
router.post("/", addStatus);
router.put("/:id", updateStatus);
router.delete("/:id", removeStatus);

module.exports = router;
