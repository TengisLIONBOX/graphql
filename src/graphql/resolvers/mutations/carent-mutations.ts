
import { createCar, deleteCar, updateCar } from "@/services/carent-service";
export const carMutations = {
  createCar: (
    _: unknown,
    {
      input,
    }: {
      input: {
        name: string;
        address: string;
        latitude: number;
        longitude: number;
        brand: string;
        color: string;
        kilometers: number;
        transmission: string;
        seats: number;
        fuel: string;
        frontimg: string;
        backimg: string;
        description: string;
        phone: number;
        price: number;
        renterId: string;
        rented: boolean;
      };
    }
  ) => createCar(input),
  deleteCar: (_: unknown, { id }: { id: string }) => deleteCar(id),
  updateCar: async (
    _: unknown,
    {
      input,
    }: {
      input: {
        id: string;
        name: string;
        address: string;
        latitude: number;
        longitude: number;
        brand: string;
        color: string;
        kilometers: number;
        transmission: string;
        seats: number;
        fuel: string;
        frontimg: string;
        backimg: string;
        description: string;
        phone: number;
        price: number;
        renterId: string;
        rented: boolean;
      };
    }
  ) => {
    const updatedCar = await updateCar(input.id, input);
    return updatedCar;
  },
};
