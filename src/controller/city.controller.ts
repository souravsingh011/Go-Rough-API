// src/controllers/cityController.ts
import { Request, Response } from "express";
import {
  getAllCities,
  getCityById,
  createCity,
  updateCity,
  deleteCity,
} from "../repository/city.repository";

export const getCities = async (req: Request, res: Response): Promise<void> => {
  try {
    const cities = await getAllCities();
    res.status(200).json(cities);
  } catch (error) {
    res.status(500).json({ message: "Error fetching cities", error });
  }
};

export const getCity = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const city = await getCityById(Number(id));
    if (city) {
      res.status(200).json(city);
    } else {
      res.status(404).json({ message: "City not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching city", error });
  }
};

export const addCity = async (req: Request, res: Response): Promise<void> => {
  try {
    const newCity = await createCity(req.body);
    res.status(201).json(newCity);
  } catch (error) {
    res.status(500).json({ message: "Error creating city", error });
  }
};

export const updateCityInfo = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  try {
    const updatedCity = await updateCity(Number(id), req.body);
    res.status(200).json(updatedCity);
  } catch (error) {
    res.status(500).json({ message: "Error updating city", error });
  }
};

export const removeCity = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  try {
    await deleteCity(Number(id));
    res.status(204).send(); // No content response
  } catch (error) {
    res.status(500).json({ message: "Error deleting city", error });
  }
};
