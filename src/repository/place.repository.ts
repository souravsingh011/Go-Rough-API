import { PrismaClient, place } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllPlace = async (): Promise<place[]> => {
  return await prisma.place.findMany();
};

export const getPlaceById = async (id: number): Promise<place | null> => {
  return await prisma.place.findUnique({ where: { id } });
};

export const createPlace = async (data: Omit<place, "id">): Promise<place> => {
  return await prisma.place.create({ data });
};

export const updatePlace = async (
  id: number,
  data: Partial<Omit<place, "id">>
): Promise<place> => {
  return await prisma.place.update({
    where: { id },
    data,
  });
};

export const deleteplace = async (id: number): Promise<place> => {
  return await prisma.place.delete({ where: { id } });
};
