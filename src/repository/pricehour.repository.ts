// src/models/addpricehoursModel.ts
import { PrismaClient, addpricehours } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllPrice = async (): Promise<addpricehours[]> => {
  return await prisma.addpricehours.findMany();
};

export const getPriceById = async (
  id: number
): Promise<addpricehours | null> => {
  return await prisma.addpricehours.findUnique({ where: { id } });
};

export const createPrice = async (
  data: Omit<addpricehours, "id">
): Promise<addpricehours> => {
  return await prisma.addpricehours.create({ data });
};

export const updatePrice = async (
  id: number,
  data: Partial<Omit<addpricehours, "id">>
): Promise<addpricehours> => {
  return await prisma.addpricehours.update({
    where: { id },
    data,
  });
};

export const deletePrice = async (id: number): Promise<addpricehours> => {
  return await prisma.addpricehours.delete({ where: { id } });
};
