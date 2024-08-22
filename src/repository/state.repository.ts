import { PrismaClient, state } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllState = async (): Promise<state[]> => {
  return await prisma.state.findMany();
};

export const getStateById = async (id: number): Promise<state | null> => {
  return await prisma.state.findUnique({ where: { id } });
};

export const createState = async (data: Omit<state, "id">): Promise<state> => {
  return await prisma.state.create({ data });
};

export const updateState = async (
  id: number,
  data: Partial<Omit<state, "id">>
): Promise<state> => {
  return await prisma.state.update({
    where: { id },
    data,
  });
};

export const deleteState = async (id: number): Promise<state> => {
  return await prisma.state.delete({ where: { id } });
};
