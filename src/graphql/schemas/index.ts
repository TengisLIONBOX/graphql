import { mergeTypeDefs } from "graphql-tools-merge-typedefs";
import { CarTypeDefs } from "./carent-schema";

export const typeDefs = mergeTypeDefs([CarTypeDefs]);
