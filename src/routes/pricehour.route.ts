import { Router } from "express";
import {
  getCities,
  getCity,
  addCity,
  updateCityInfo,
  removeCity,
} from "../controller/pricehour.controller"; // Check this path

const router = Router();

router.get("/", getCities);
router.get("/:id", getCity);
router.post("/", addCity);
router.put("/:id", updateCityInfo);
router.delete("/:id", removeCity);

module.exports = router;
