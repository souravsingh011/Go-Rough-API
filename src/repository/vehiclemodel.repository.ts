import { PrismaClient, vehiclemodel } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllVehiclemodel = async (): Promise<vehiclemodel[]> => {
  return await prisma.vehiclemodel.findMany();
};

export const getVehiclemodelById = async (
  id: number
): Promise<vehiclemodel | null> => {
  return await prisma.vehiclemodel.findUnique({ where: { id } });
};

export const createVehiclemodel = async (
  data: Omit<vehiclemodel, "id">
): Promise<vehiclemodel> => {
  return await prisma.vehiclemodel.create({ data });
};

export const updateVehiclemodel = async (
  id: number,
  data: Partial<Omit<vehiclemodel, "id">>
): Promise<vehiclemodel> => {
  return await prisma.vehiclemodel.update({
    where: { id },
    data,
  });
};

export const deleteVehiclemodel = async (id: number): Promise<vehiclemodel> => {
  return await prisma.vehiclemodel.delete({ where: { id } });
};
