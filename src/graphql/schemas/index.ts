import { mergeTypeDefs } from "graphql-tools-merge-typedefs";
import { CarentCategoryTypeDefs } from "./carent-category-schema";
import { CarTypeDefs } from "./carent-schema";

export const typeDefs = mergeTypeDefs([CarentCategoryTypeDefs, CarTypeDefs]);
