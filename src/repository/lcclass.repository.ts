import { PrismaClient, lcclass } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllLcclass = async (): Promise<lcclass[]> => {
  return await prisma.lcclass.findMany();
};

export const getLcclassById = async (
  lc_id: number
): Promise<lcclass | null> => {
  return await prisma.lcclass.findUnique({ where: { lc_id } });
};

export const createLcclass = async (
  data: Omit<lcclass, "id">
): Promise<lcclass> => {
  return await prisma.lcclass.create({ data });
};

export const updateLcclass = async (
  lc_id: number,
  data: Partial<Omit<lcclass, "id">>
): Promise<lcclass> => {
  return await prisma.lcclass.update({
    where: { lc_id },
    data,
  });
};

export const deleteLcclass = async (lc_id: number): Promise<lcclass> => {
  return await prisma.lcclass.delete({ where: { lc_id } });
};
