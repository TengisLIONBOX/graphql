import {
  getCarList,
  getCarById,
  getCarsByUser,
  getCarsByBrand,
} from "@/services/carent-service";

export const carQueries = {
  getCarList: () => getCarList(),
  getCarById: (_: unknown, { id }: { id: string }) => getCarById(id),
  getCarsByUser: (_: unknown, { renterId }: { renterId: string }) =>
    getCarsByUser(renterId),
  getCarsByBrand: (_: unknown, { brand }: { brand: string }) =>
    getCarsByBrand(brand),
};
