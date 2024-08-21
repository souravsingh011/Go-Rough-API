import { Router } from "express";
import {
  getGBHs,
  getGBH,
  addGBH,
  updateeGBH,
  removeGBH,
} from "../controller/garagebusinesshours.controller"; // Check this path

const router = Router();

router.get("/", getGBHs);
router.get("/:id", getGBH);
router.post("/", addGBH);
router.put("/:id", updateeGBH);
router.delete("/:id", removeGBH);

module.exports = router;
