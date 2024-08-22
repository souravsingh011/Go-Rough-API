// src/models/bookingstatusModel.ts
import { PrismaClient, country } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllCountry = async (): Promise<country[]> => {
  return await prisma.country.findMany();
};

export const getCountryById = async (id: number): Promise<country | null> => {
  return await prisma.country.findUnique({ where: { id } });
};

export const createCountry = async (
  data: Omit<country, "id">
): Promise<country> => {
  return await prisma.country.create({ data });
};

export const updateCountry = async (
  id: number,
  data: Partial<Omit<country, "id">>
): Promise<country> => {
  return await prisma.country.update({
    where: { id },
    data,
  });
};

export const deleteCountry = async (id: number): Promise<country> => {
  return await prisma.country.delete({ where: { id } });
};
