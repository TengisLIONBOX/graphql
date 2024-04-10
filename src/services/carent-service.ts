// import { Car, CarCreateInput, CarUpdateInput } from "@/graphql/generated";
// import { GraphQLError } from "graphql";
// import { nanoid } from "nanoid";

// const carList: Car[] = [
//   {
//     id: nanoid(),
//     name: "prius",
//     price: 20,
//     fuel: "diesel",
//     color: "black",
//     address: "bla bla bla",
//     phone: 99091010,
//     description: "bsjhbhjhs",
//     transmission: "manual",
//     seats: 4,
//     kilometer: 15000,
//     latitude: 40.7128,
//     longitude: -74.006,
//     frontimg: "sas",
//     backimg: "asa",
//     brand: "toyota",
//     renterId: "user_2dijBjN8vNiCMGo7pTkZ4jzCkwB",
//     rented: false,
//   },
// ];

// export const getCarList = async (): Promise<Car[]> => {
//   return carList;
// };

// export const createCar = (input: Omit<CarCreateInput, "id">): Car => {
//   const car: Car = { id: nanoid(), ...input };
//   carList.push(car);
//   return car;
// };

// export const updateCar = (input: CarUpdateInput): Car | undefined => {
//   const todo = carList.find((car) => car.id === input.id);
//   if (!todo) throw new GraphQLError("Car not found");
//   todo.name = `${input.name}`;
//   todo.price = Number(input.price);
//   todo.description = `${input.description}`;
//   todo.rented = Boolean(input.rented);
//   return todo;
// };

// export const deleteCar = (id: string): Car | undefined => {
//   const index = carList.findIndex((car) => car.id === id);
//   if (index === -1) throw new GraphQLError("Car not found");
//   return carList.splice(index, 1)[0];
// };

// export const getCarById = (id: string): Car | undefined =>
//   carList.find((car) => car.id === id);

// export const getUserCarById = (renterId: string): Car | undefined =>
//   carList.find((car) => car.renterId === renterId);

import { prisma } from "@/utils/prisma";
import { Car, Prisma } from "@prisma/client";
import { GraphQLError } from "graphql";
import { clerkClient } from "@clerk/nextjs";

export const getCarList = async () => {
  try {
    const result = await prisma.car.findMany({
      where: {
        rented: false,
      },
    });
    const reversedCars = result.reverse();

    return reversedCars;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error fetching cars");
  }
};

export const getCarById = async (id: string): Promise<Car | null> => {
  try {
    const car = await prisma.car.findUnique({ where: { id } });
    return car;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error fetching car by id");
  }
};

export const getCarsByBrand = async (brand: string): Promise<Car[]> => {
  if (!brand) {
    throw new GraphQLError("Brand argument must not be null");
  }

  try {
    const carBrands = await prisma.car.findMany({
      where: {
        brand,
        rented: false,
      },
    });
    const reversedCarsByBrand = carBrands.reverse();

    return reversedCarsByBrand;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error fetching cars by brand");
  } finally {
    await prisma.$disconnect();
  }
};

export const updateCar = async (
  id: string,
  data: Prisma.CarUpdateInput & { id: string }
): Promise<Car | null> => {
  try {
    const { id: updatingId, ...rest } = data;
    const updatedCar = await prisma.car.update({
      where: { id },
      data: rest,
    });
    return updatedCar;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error updating car");
  }
};

export const deleteCar = async (id: string): Promise<Car | null> => {
  try {
    const deletedCar = await prisma.car.delete({
      where: { id },
    });
    return deletedCar;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error deleting car");
  }
};

export const getCarsByUser = async (renterId: string): Promise<Car[]> => {
  try {
    const userCars = await prisma.car.findMany({
      where: {
        renterId,
      },
    });

    const reversedUserCars = userCars.reverse();

    return reversedUserCars;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error fetch get CarsByUser");
  } finally {
    await prisma.$disconnect();
  }
};

export const createCar = async (input: Prisma.CarCreateInput) => {
  try {
    const result = await prisma.car.create({ data: input });
    return result;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error fetching user cars");
  }
};
export const getUserById = async (id: string) => {
  try {
    const clerkUser = await clerkClient.users.getUser(id);

    return clerkUser;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw new Error("Could not fetch getUserById");
  }
};

export const getRentedCars = async (renterId: string) => {
  try {
    const RentedCars = await prisma.car.findMany({
      where: {
        renterId,
        rented: true,
      },
    });
    const reversedRentedCars = RentedCars.reverse();

    return reversedRentedCars;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw new Error("Could not fetch Rented Cars");
  }
};

export const getMyRentedCars = async (rentedId: string): Promise<Car[]> => {
  try {
    const myRentedCars = await prisma.car.findMany({
      where: {
        rentedId,
      },
    });
    return myRentedCars.reverse();
  } catch (error) {
    console.error("Error fetching user's rented cars:", error);
    throw new Error("Failed to fetch user's rented cars");
  }
};
