// src/models/cityModel.ts
import { PrismaClient, city } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllCities = async (): Promise<city[]> => {
  return await prisma.city.findMany();
};

export const getCityById = async (id: number): Promise<city | null> => {
  return await prisma.city.findUnique({ where: { id } });
};

export const createCity = async (data: Omit<city, "id">): Promise<city> => {
  return await prisma.city.create({ data });
};

export const updateCity = async (
  id: number,
  data: Partial<Omit<city, "id">>
): Promise<city> => {
  return await prisma.city.update({
    where: { id },
    data,
  });
};

export const deleteCity = async (id: number): Promise<city> => {
  return await prisma.city.delete({ where: { id } });
};
