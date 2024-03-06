// import { startServerAndCreateNextHandler } from "@as-integrations/next";
// import { ApolloServer } from "@apollo/server";
// import { gql } from "graphql-tag";
// import {
//   TodoCreateInput,
//   createTodo,
//   getTodoById,
//   getTodoList,
//   deleteTodoById,
//   updateTodoById,
// } from "@/services/todo-service";

// const resolvers = {
//   Query: {
//     getTodoList: () => getTodoList(),
//     getTodo: (_: unknown, { id }: { id: string }) => getTodoById(id),
//   },
//   Mutation: {
//     createTodo: (_: unknown, { input }: { input: TodoCreateInput }) =>
//       createTodo(input),
//     deleteTodo: (_: unknown, { id }: { id: string }) => deleteTodoById(id),
//     updateTodo: (
//       _: unknown,
//       { id, input }: { id: string; input: TodoCreateInput }
//     ) => updateTodoById(id, input),
//   },
// };

// const typeDefs = gql`
//   type Todo {
//     id: ID!
//     title: String!
//     completed: Boolean!
//   }

//   input TodoCreateInput {
//     title: String!
//     completed: Boolean!
//   }

//   type Query {
//     getTodoList: [Todo]
//     getTodo(id: ID): Todo
//   }

//   type Mutation {
//     createTodo(input: TodoCreateInput!): Todo
//     deleteTodo(id: ID!): Todo
//     updateTodo(id: ID!, input: TodoCreateInput!): Todo
//   }
// `;

// const server = new ApolloServer({
//   resolvers,
//   typeDefs,
// });

// const handler = startServerAndCreateNextHandler(server);

// export { handler as GET, handler as POST };

import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { resolvers } from "@/graphql/resolvers";
import { typeDefs } from "@/graphql/schemas";

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

const handler = startServerAndCreateNextHandler(server);

export { handler as GET, handler as POST };
