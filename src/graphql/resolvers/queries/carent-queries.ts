import {
  getCarList,
  getCarById,
  getCarsByUser,
} from "@/services/carent-service";

export const carQueries = {
  getCarList: () => getCarList(),
  getCarById: (_: unknown, { id }: { id: string }) => getCarById(id),
  getCarsByUser: (_: unknown, { renterId }: { renterId: string }) =>
    getCarsByUser(renterId),
};
