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
        latitude: string;
        longitude: string;
        brand: string;
        color: string;
        kilometers: number;
        transmission: string;
        seats: number;
        fuel: string;
        engine: number;
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
        latitude: string;
        longitude: string;
        brand: string;
        color: string;
        kilometers: number;
        transmission: string;
        seats: number;
        fuel: string;
        engine: number;
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
