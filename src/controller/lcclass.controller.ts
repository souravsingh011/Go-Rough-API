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
    const lc = await getAllLcclass();
    res.status(200).json(lc);
  } catch (error) {
    res.status(500).json({ message: "Error fetching lc", error });
  }
};

export const getStatus = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const lc = await getLcclassById(Number(id));
    if (lc) {
      res.status(200).json(lc);
    } else {
      res.status(404).json({ message: "Lc not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching lc", error });
  }
};

export const addStatus = async (req: Request, res: Response): Promise<void> => {
  try {
    const newlc = await createLcclass(req.body);
    res.status(201).json(newlc);
  } catch (error) {
    res.status(500).json({ message: "Error creating lc", error });
  }
};

export const updateStatus = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  try {
    const uplc = await updateLcclass(Number(id), req.body);
    res.status(200).json(uplc);
  } catch (error) {
    res.status(500).json({ message: "Error updating lc", error });
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
    res.status(500).json({ message: "Error deleting lc", error });
  }
};
