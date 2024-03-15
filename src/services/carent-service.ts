import { Car, CarCreateInput, CarUpdateInput } from "@/graphql/generated";
import { GraphQLError } from "graphql";
import { nanoid } from "nanoid";

const carList: Car[] = [
  {
    id: nanoid(),
    name: "prius",
    price: 20,
    fuel: "diesel",
    color: "black",
    address: "bla bla bla",
    phone: 99091010,
    description: "bsjhbhjhs",
    transmission: "manual",
    seats: 4,
    kilometer: 15000,
    latitude: 40.7128,
    longitude: -74.006,
    frontimg: "sas",
    backimg: "asa",
    brand: "toyota",
    renterId: "user_2dijBjN8vNiCMGo7pTkZ4jzCkwB",
    rented: false,
  },
];

export const getCarList = async (): Promise<Car[]> => {
  return carList;
};

export const createCar = (input: Omit<CarCreateInput, "id">): Car => {
  const car: Car = { id: nanoid(), ...input };
  carList.push(car);
  return car;
};

export const updateCar = (input: CarUpdateInput): Car | undefined => {
  const todo = carList.find((car) => car.id === input.id);
  if (!todo) throw new GraphQLError("Car not found");
  todo.name = `${input.name}`;
  todo.price = Number(input.price);
  todo.description = `${input.description}`;
  todo.rented = Boolean(input.rented);
  return todo;
};

export const deleteCar = (id: string): Car | undefined => {
  const index = carList.findIndex((car) => car.id === id);
  if (index === -1) throw new GraphQLError("Car not found");
  return carList.splice(index, 1)[0];
};

export const getCarById = (id: string): Car | undefined => {
  return carList.find((car) => car.id === id);
};

export const getUserCarById = (renterId: string): Car | undefined => {
  return carList.find((car) => car.renterId === renterId);
};
