// src/models/bookingstatusModel.ts--- Model
import { PrismaClient, bookingstatus } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllbookingstatus = async (): Promise<bookingstatus[]> => {
  return await prisma.bookingstatus.findMany();
};

export const getbookingstatusById = async (
  id: number
): Promise<bookingstatus | null> => {
  return await prisma.bookingstatus.findUnique({ where: { id } });
};

export const createbookingstatus = async (
  data: Omit<bookingstatus, "id">
): Promise<bookingstatus> => {
  return await prisma.bookingstatus.create({ data });
};

export const updatebookingstatus = async (
  id: number,
  data: Partial<Omit<bookingstatus, "id">>
): Promise<bookingstatus> => {
  return await prisma.bookingstatus.update({
    where: { id },
    data,
  });
};

export const deletebookingstatus = async (
  id: number
): Promise<bookingstatus> => {
  return await prisma.bookingstatus.delete({ where: { id } });
};
