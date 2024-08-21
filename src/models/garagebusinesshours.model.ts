// src/models/cityModel.ts
import { PrismaClient, garagebusinesshours } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllGBH = async (): Promise<garagebusinesshours[]> => {
  return await prisma.garagebusinesshours.findMany();
};

export const getGBHById = async (
  id: number
): Promise<garagebusinesshours | null> => {
  return await prisma.garagebusinesshours.findUnique({ where: { id } });
};

export const createGBH = async (
  data: Omit<garagebusinesshours, "id">
): Promise<garagebusinesshours> => {
  return await prisma.garagebusinesshours.create({ data });
};

export const updateGBH = async (
  id: number,
  data: Partial<Omit<garagebusinesshours, "id">>
): Promise<garagebusinesshours> => {
  return await prisma.garagebusinesshours.update({
    where: { id },
    data,
  });
};

export const deleteGBH = async (id: number): Promise<garagebusinesshours> => {
  return await prisma.garagebusinesshours.delete({ where: { id } });
};
