import { Request, Response } from "express";
import {
  getAllVehiclemodel,
  getVehiclemodelById,
  createVehiclemodel,
  updateVehiclemodel,
  deleteVehiclemodel,
} from "../repository/vehiclemodel.repository";
export const getAllStatus = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const vehiclemodel = await getAllVehiclemodel();
    res.status(200).json(vehiclemodel);
  } catch (error) {
    res.status(500).json({ message: "Error fetching vehicle model", error });
  }
};

export const getStatus = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const vehiclemodel = await getVehiclemodelById(Number(id));
    if (vehiclemodel) {
      res.status(200).json(vehiclemodel);
    } else {
      res.status(404).json({ message: "Vehicle model not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching vehicle model", error });
  }
};

export const addStatus = async (req: Request, res: Response): Promise<void> => {
  try {
    const vewVehiclemodel = await createVehiclemodel(req.body);
    res.status(201).json(vewVehiclemodel);
  } catch (error) {
    res.status(500).json({ message: "Error creating vehicle model", error });
  }
};

export const updateStatus = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  try {
    const vpVehiclemodel = await updateVehiclemodel(Number(id), req.body);
    res.status(200).json(vpVehiclemodel);
  } catch (error) {
    res.status(500).json({ message: "Error updating vehiclemodel", error });
  }
};

export const removeStatus = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  try {
    await deleteVehiclemodel(Number(id));
    res.status(204).send(); // No content response
  } catch (error) {
    res.status(500).json({ message: "Error deleting vehiclemodel", error });
  }
};
