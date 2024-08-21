// src/controllers/cityController.ts
import { Request, Response } from "express";
import {
  getAllCountry,
  getCountryById,
  createCountry,
  updateCountry,
  deleteCountry,
} from "../models/country.model";

export const getAllStatus = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const cities = await getAllCountry();
    res.status(200).json(cities);
  } catch (error) {
    res.status(500).json({ message: "Error fetching cities", error });
  }
};

export const getStatus = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const city = await getCountryById(Number(id));
    if (city) {
      res.status(200).json(city);
    } else {
      res.status(404).json({ message: "City not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching city", error });
  }
};

export const addStatus = async (req: Request, res: Response): Promise<void> => {
  try {
    const newCity = await createCountry(req.body);
    res.status(201).json(newCity);
  } catch (error) {
    res.status(500).json({ message: "Error creating city", error });
  }
};

export const updateStatus = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  try {
    const updatedCity = await updateCountry(Number(id), req.body);
    res.status(200).json(updatedCity);
  } catch (error) {
    res.status(500).json({ message: "Error updating city", error });
  }
};

export const removeStatus = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  try {
    await deleteCountry(Number(id));
    res.status(204).send(); // No content response
  } catch (error) {
    res.status(500).json({ message: "Error deleting city", error });
  }
};
