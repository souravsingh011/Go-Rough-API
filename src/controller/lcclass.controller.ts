import { Request, Response } from "express";
import {
  getAllLcclass,
  createLcclass,
  getLcclassById,
  updateLcclass,
  deleteLcclass,
} from "../repository/lcclass.repository";
export const getAllStatus = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const date = await getAllLcclass();
    res.status(200).json(date);
  } catch (error) {
    res.status(500).json({ message: "Error fetching date", error });
  }
};

export const getStatus = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const date = await getLcclassById(Number(id));
    if (date) {
      res.status(200).json(date);
    } else {
      res.status(404).json({ message: "Date not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching date", error });
  }
};

export const addStatus = async (req: Request, res: Response): Promise<void> => {
  try {
    const newdate = await createLcclass(req.body);
    res.status(201).json(newdate);
  } catch (error) {
    res.status(500).json({ message: "Error creating date", error });
  }
};

export const updateStatus = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  try {
    const updatedate = await updateLcclass(Number(id), req.body);
    res.status(200).json(updatedate);
  } catch (error) {
    res.status(500).json({ message: "Error updating date", error });
  }
};

export const removeStatus = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  try {
    await deleteLcclass(Number(id));
    res.status(204).send(); // No content response
  } catch (error) {
    res.status(500).json({ message: "Error deleting date", error });
  }
};
