// src/controllers/cityController.ts
import { Request, Response } from "express";
import {
  getAllGBH,
  getGBHById,
  createGBH,
  updateGBH,
  deleteGBH,
} from "../repository/garagebusinesshours.repository";

export const getGBHs = async (req: Request, res: Response): Promise<void> => {
  try {
    const cities = await getAllGBH();
    res.status(200).json(cities);
  } catch (error) {
    res.status(500).json({ message: "Error fetching cities", error });
  }
};

export const getGBH = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const city = await getGBHById(Number(id));
    if (city) {
      res.status(200).json(city);
    } else {
      res.status(404).json({ message: "City not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching city", error });
  }
};

export const addGBH = async (req: Request, res: Response): Promise<void> => {
  try {
    const newCity = await createGBH(req.body);
    res.status(201).json(newCity);
  } catch (error) {
    res.status(500).json({ message: "Error creating city", error });
  }
};

export const updateeGBH = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  try {
    const updatedCity = await updateGBH(Number(id), req.body);
    res.status(200).json(updatedCity);
  } catch (error) {
    res.status(500).json({ message: "Error updating city", error });
  }
};

export const removeGBH = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    await deleteGBH(Number(id));
    res.status(204).send(); // No content response
  } catch (error) {
    res.status(500).json({ message: "Error deleting city", error });
  }
};
