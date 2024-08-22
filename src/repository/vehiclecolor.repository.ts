import { PrismaClient, vehiclecolor } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllVehiclecolor = async (): Promise<vehiclecolor[]> => {
  return await prisma.vehiclecolor.findMany();
};

export const getVehiclecolorById = async (
  id: number
): Promise<vehiclecolor | null> => {
  return await prisma.vehiclecolor.findUnique({ where: { id } });
};

export const createVehiclecolor = async (
  data: Omit<vehiclecolor, "id">
): Promise<vehiclecolor> => {
  return await prisma.vehiclecolor.create({ data });
};

export const updateVehiclecolor = async (
  id: number,
  data: Partial<Omit<vehiclecolor, "id">>
): Promise<vehiclecolor> => {
  return await prisma.vehiclecolor.update({
    where: { id },
    data,
  });
};

export const deleteVehiclecolor = async (id: number): Promise<vehiclecolor> => {
  return await prisma.vehiclecolor.delete({ where: { id } });
};
