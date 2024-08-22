import { PrismaClient, vehicletype } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllVehicleType = async (): Promise<vehicletype[]> => {
  return await prisma.vehicletype.findMany();
};

export const getVehicleTypeById = async (
  id: number
): Promise<vehicletype | null> => {
  return await prisma.vehicletype.findUnique({ where: { id } });
};

export const createVehicleType = async (
  data: Omit<vehicletype, "id">
): Promise<vehicletype> => {
  return await prisma.vehicletype.create({ data });
};

export const updateVehicleType = async (
  id: number,
  data: Partial<Omit<vehicletype, "id">>
): Promise<vehicletype> => {
  return await prisma.vehicletype.update({
    where: { id },
    data,
  });
};

export const deleteVehicleType = async (id: number): Promise<vehicletype> => {
  return await prisma.vehicletype.delete({ where: { id } });
};
