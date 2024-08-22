import { Request, Response } from "express";
import {
  getAllVehiclecolor,
  getVehiclecolorById,
  createVehiclecolor,
  updateVehiclecolor,
  deleteVehiclecolor,
} from "../repository/vehiclecolor.repository";
export const getAllStatus = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const place = await getAllVehiclecolor();
    res.status(200).json(place);
  } catch (error) {
    res.status(500).json({ message: "Error fetching place", error });
  }
};

export const getStatus = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const place = await getVehiclecolorById(Number(id));
    if (place) {
      res.status(200).json(place);
    } else {
      res.status(404).json({ message: "place not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching place", error });
  }
};

export const addStatus = async (req: Request, res: Response): Promise<void> => {
  try {
    const newplace = await createVehiclecolor(req.body);
    res.status(201).json(newplace);
  } catch (error) {
    res.status(500).json({ message: "Error creating place", error });
  }
};

export const updateStatus = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  try {
    const upplace = await updateVehiclecolor(Number(id), req.body);
    res.status(200).json(upplace);
  } catch (error) {
    res.status(500).json({ message: "Error updating place", error });
  }
};

export const removeStatus = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  try {
    await deleteVehiclecolor(Number(id));
    res.status(204).send(); // No content response
  } catch (error) {
    res.status(500).json({ message: "Error deleting place", error });
  }
};
