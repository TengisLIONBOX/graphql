import gql from "graphql-tag";

export const CarentCategoryTypeDefs = gql`
  type CarCategory {
    id: ID!
    title: String!
    price: Float!
  }

  input CarCategoryCreateInput {
    title: String!
  }

  input CarCategoryUpdateInput {
    id: ID!
    title: String
  }

  type Query {
    getCategories: [CarCategory]
    getCategory(id: ID): CarCategory
  }
  type Mutation {
    createTodoCategory(input: CarCategoryCreateInput!): CarCategory
    updateTodoCategory(input: CarCategoryUpdateInput!): CarCategory
    deleteTodoCategory(id: ID!): CarCategory
  }
`;
