import gql from "graphql-tag";

export const CarTypeDefs = gql`
  type Car {
    id: ID!
    name: String!
    price: Float!
    fuel: String!
    color: String!
    address: String!
    phone: Int!
    description: String!
    transmission: String!
    seats: Int!
    kilometer: Float!
    latitude: Float!
    longitude: Float!
    frontimg: String!
    backimg: String!
    brand: String!
    renterId: String!
    rented: Boolean!
  }

  input CarCreateInput {
    name: String!
    price: Float!
    fuel: String!
    color: String!
    address: String!
    phone: Int!
    description: String!
    transmission: String!
    seats: Int!
    kilometer: Float!
    latitude: Float!
    longitude: Float!
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
    categoryId: ID
    rented: Boolean
  }

  type Query {
    getCarList: [Car!]!
    getCar(id: ID): Car
    getUserCar(renterId: String): Car
  }
  type Mutation {
    createCar(input: CarCreateInput!): Car!
    updateCar(input: CarUpdateInput!): Car!
    deleteCar(id: ID!): Car
  }
`;
