// src/controllers/cityController.ts
import { Request, Response } from "express";
import {
  getAllPrice,
  getPriceById,
  createPrice,
  updatePrice,
  deletePrice,
} from "../models/pricehour.model";

export const getCities = async (req: Request, res: Response): Promise<void> => {
  try {
    const cities = await getAllPrice();
    console.log(cities);
    res.status(200).json(cities);
  } catch (error) {
    res.status(500).json({ message: "Error fetching Price & hour", error });
  }
};

export const getCity = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const city = await getPriceById(Number(id));
    if (city) {
      res.status(200).json(city);
    } else {
      res.status(404).json({ message: "Price & hour not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching Price & hour", error });
  }
};

export const addCity = async (req: Request, res: Response): Promise<void> => {
  try {
    const newCity = await createPrice(req.body);
    res.status(201).json(newCity);
  } catch (error) {
    res.status(500).json({ message: "Error creating Price & hour", error });
  }
};

export const updateCityInfo = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  try {
    const updatedCity = await updatePrice(Number(id), req.body);
    res.status(200).json(updatedCity);
  } catch (error) {
    res.status(500).json({ message: "Error updating Price & hour", error });
  }
};

export const removeCity = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  try {
    await deletePrice(Number(id));
    res.status(204).send(); // No content response
  } catch (error) {
    res.status(500).json({ message: "Error deleting Price & hour", error });
  }
};
