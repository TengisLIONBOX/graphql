import { CarCreateInput, CarUpdateInput } from "@/graphql/generated";
import { createCar, deleteCar, updateCar } from "@/services/carent-service";

export const carMutations = {
  createCar: (_: unknown, { input }: { input: CarCreateInput }) =>
    createCar(input),
  updateCar: (_: unknown, { input }: { input: CarUpdateInput }) =>
    updateCar(input),
  deleteCar: (_: unknown, { id }: { id: string }) => deleteCar(id),
};
