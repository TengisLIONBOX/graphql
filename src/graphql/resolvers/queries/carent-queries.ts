import { getRentedCars, getUserById } from "./../../../services/carent-service";
import {
  getCarList,
  getCarById,
  getCarsByUser,
  getCarsByBrand,
  getMyRentedCars,
} from "@/services/carent-service";

export const carQueries = {
  getCarList: () => getCarList(),
  getCarById: (_: unknown, { id }: { id: string }) => getCarById(id),
  getCarsByUser: (_: unknown, { renterId }: { renterId: string }) =>
    getCarsByUser(renterId),
  getCarsByBrand: (_: unknown, { brand }: { brand: string }) =>
    getCarsByBrand(brand),
  getUserById: (_: unknown, { id }: { id: string }) => getUserById(id),
  getRentedCars: (_: unknown, { renterId }: { renterId: string }) =>
    getRentedCars(renterId),
  getMyRentedCars: (_: unknown, { rentedId }: { rentedId: string }) =>
    getMyRentedCars(rentedId),
};
