import { carQueries } from "./queries/carent-queries";
import { carMutations } from "./mutations/carent-mutations";

export const resolvers = {
  Query: {
    ...carQueries,
  },
  Mutation: {
    ...carMutations,
  },
};
