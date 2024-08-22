import { Request, Response } from "express";
import {
  getAllVehicleType,
  getVehicleTypeById,
  createVehicleType,
  updateVehicleType,
  deleteVehicleType,
} from "../repository/vehicletype.repository";
export const getAllStatus = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const vehicletype = await getAllVehicleType();
    res.status(200).json(vehicletype);
  } catch (error) {
    res.status(500).json({ message: "Error fetching vehicle type", error });
  }
};

export const getStatus = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const vehicletype = await getVehicleTypeById(Number(id));
    if (vehicletype) {
      res.status(200).json(vehicletype);
    } else {
      res.status(404).json({ message: "Vehicle type not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching vehicletype", error });
  }
};

export const addStatus = async (req: Request, res: Response): Promise<void> => {
  try {
    const newvehicletype = await createVehicleType(req.body);
    res.status(201).json(newvehicletype);
  } catch (error) {
    res.status(500).json({ message: "Error creating vehicle type", error });
  }
};

export const updateStatus = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  try {
    const upvehicletype = await updateVehicleType(Number(id), req.body);
    res.status(200).json(upvehicletype);
  } catch (error) {
    res.status(500).json({ message: "Error updating vehicle type", error });
  }
};

export const removeStatus = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  try {
    await deleteVehicleType(Number(id));
    res.status(204).send(); // No content response
  } catch (error) {
    res.status(500).json({ message: "Error deleting vehicle type", error });
  }
};
