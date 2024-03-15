import {
  getCarById,
  getCarList,
  getUserCarById,
} from "@/services/carent-service";

export const CarentQueries = {
  getCarList: () => getCarList(),
  getCar: (_: unknown, { id }: { id: string }) => getCarById(id),
  getUserCar: (_: unknown, { renterId }: { renterId: string }) =>
    getUserCarById(renterId),
};
