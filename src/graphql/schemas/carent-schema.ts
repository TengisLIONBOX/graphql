import gql from "graphql-tag";

export const CarTypeDefs = gql`
  type Car {
    id: ID!
    name: String!
    price: Int!
    fuel: String!
    color: String!
    address: String!
    phone: Int!
    description: String!
    transmission: String!
    seats: Int!
    kilometers: Int!
    engine: Int!
    latitude: String!
    longitude: String!
    frontimg: String!
    backimg: String!
    brand: String!
    renterId: String!
    rented: Boolean!
  }

  input CarCreateInput {
    name: String!
    price: Int!
    fuel: String!
    color: String!
    address: String!
    phone: Int!
    description: String!
    transmission: String!
    seats: Int!
    engine: Int!
    kilometers: Int!
    latitude: String!
    longitude: String!
    frontimg: String!
    backimg: String!
    brand: String!
    renterId: String!
    rented: Boolean!
  }

  input CarUpdateInput {
    id: ID!
    name: String
    price: Float
    description: String
    rented: Boolean
  }

  type Query {
    getCarList: [Car!]!
    getCarById(id: ID): Car
    getCarsByUser(renterId: String): Car
    getCarsByBrand(brand: String): Car
  }
  type Mutation {
    createCar(input: CarCreateInput!): Car!
    updateCar(input: CarUpdateInput!): Car!
    deleteCar(id: ID!): Car
  }
`;
