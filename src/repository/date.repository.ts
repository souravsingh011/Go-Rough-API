import { PrismaClient, date } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllDate = async (): Promise<date[]> => {
  return await prisma.date.findMany();
};

export const getDateById = async (id: number): Promise<date | null> => {
  return await prisma.date.findUnique({ where: { id } });
};

export const createDate = async (data: Omit<date, "id">): Promise<date> => {
  return await prisma.date.create({ data });
};

export const updateDate = async (
  id: number,
  data: Partial<Omit<date, "id">>
): Promise<date> => {
  return await prisma.date.update({
    where: { id },
    data,
  });
};

export const deleteDate = async (id: number): Promise<date> => {
  return await prisma.date.delete({ where: { id } });
};
