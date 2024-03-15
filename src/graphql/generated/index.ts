import { GraphQLResolveInfo } from 'graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Car = {
  __typename?: 'Car';
  address: Scalars['String']['output'];
  backimg: Scalars['String']['output'];
  brand: Scalars['String']['output'];
  color: Scalars['String']['output'];
  description: Scalars['String']['output'];
  frontimg: Scalars['String']['output'];
  fuel: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  kilometer: Scalars['Float']['output'];
  latitude: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  phone: Scalars['Int']['output'];
  price: Scalars['Float']['output'];
  rented: Scalars['Boolean']['output'];
  renterId: Scalars['String']['output'];
  seats: Scalars['Int']['output'];
  transmission: Scalars['String']['output'];
};

export type CarCategory = {
  __typename?: 'CarCategory';
  id: Scalars['ID']['output'];
  price: Scalars['Float']['output'];
  title: Scalars['String']['output'];
};

export type CarCategoryCreateInput = {
  title: Scalars['String']['input'];
};

export type CarCategoryUpdateInput = {
  id: Scalars['ID']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CarCreateInput = {
  address: Scalars['String']['input'];
  backimg: Scalars['String']['input'];
  brand: Scalars['String']['input'];
  color: Scalars['String']['input'];
  description: Scalars['String']['input'];
  frontimg: Scalars['String']['input'];
  fuel: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  kilometer: Scalars['Float']['input'];
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
  name: Scalars['String']['input'];
  phone: Scalars['Int']['input'];
  price: Scalars['Float']['input'];
  rented: Scalars['Boolean']['input'];
  renterId: Scalars['String']['input'];
  seats: Scalars['Int']['input'];
  transmission: Scalars['String']['input'];
};

export type CarUpdateInput = {
  categoryId?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  rented?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCar: Car;
  createTodoCategory?: Maybe<CarCategory>;
  deleteCar?: Maybe<Car>;
  deleteTodoCategory?: Maybe<CarCategory>;
  updateCar: Car;
  updateTodoCategory?: Maybe<CarCategory>;
};


export type MutationCreateCarArgs = {
  input: CarCreateInput;
};


export type MutationCreateTodoCategoryArgs = {
  input: CarCategoryCreateInput;
};


export type MutationDeleteCarArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTodoCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateCarArgs = {
  input: CarUpdateInput;
};


export type MutationUpdateTodoCategoryArgs = {
  input: CarCategoryUpdateInput;
};

export type Query = {
  __typename?: 'Query';
  getCar?: Maybe<Car>;
  getCarList: Array<Car>;
  getCategories?: Maybe<Array<Maybe<CarCategory>>>;
  getCategory?: Maybe<CarCategory>;
  getUserCar?: Maybe<Car>;
};


export type QueryGetCarArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetCategoryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetUserCarArgs = {
  renterId?: InputMaybe<Scalars['String']['input']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Car: ResolverTypeWrapper<Car>;
  CarCategory: ResolverTypeWrapper<CarCategory>;
  CarCategoryCreateInput: CarCategoryCreateInput;
  CarCategoryUpdateInput: CarCategoryUpdateInput;
  CarCreateInput: CarCreateInput;
  CarUpdateInput: CarUpdateInput;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  Car: Car;
  CarCategory: CarCategory;
  CarCategoryCreateInput: CarCategoryCreateInput;
  CarCategoryUpdateInput: CarCategoryUpdateInput;
  CarCreateInput: CarCreateInput;
  CarUpdateInput: CarUpdateInput;
  Float: Scalars['Float']['output'];
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Mutation: {};
  Query: {};
  String: Scalars['String']['output'];
};

export type CarResolvers<ContextType = any, ParentType extends ResolversParentTypes['Car'] = ResolversParentTypes['Car']> = {
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  backimg?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  brand?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  frontimg?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fuel?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  kilometer?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  latitude?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  longitude?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  rented?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  renterId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  seats?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transmission?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CarCategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['CarCategory'] = ResolversParentTypes['CarCategory']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createCar?: Resolver<ResolversTypes['Car'], ParentType, ContextType, RequireFields<MutationCreateCarArgs, 'input'>>;
  createTodoCategory?: Resolver<Maybe<ResolversTypes['CarCategory']>, ParentType, ContextType, RequireFields<MutationCreateTodoCategoryArgs, 'input'>>;
  deleteCar?: Resolver<Maybe<ResolversTypes['Car']>, ParentType, ContextType, RequireFields<MutationDeleteCarArgs, 'id'>>;
  deleteTodoCategory?: Resolver<Maybe<ResolversTypes['CarCategory']>, ParentType, ContextType, RequireFields<MutationDeleteTodoCategoryArgs, 'id'>>;
  updateCar?: Resolver<ResolversTypes['Car'], ParentType, ContextType, RequireFields<MutationUpdateCarArgs, 'input'>>;
  updateTodoCategory?: Resolver<Maybe<ResolversTypes['CarCategory']>, ParentType, ContextType, RequireFields<MutationUpdateTodoCategoryArgs, 'input'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getCar?: Resolver<Maybe<ResolversTypes['Car']>, ParentType, ContextType, Partial<QueryGetCarArgs>>;
  getCarList?: Resolver<Array<ResolversTypes['Car']>, ParentType, ContextType>;
  getCategories?: Resolver<Maybe<Array<Maybe<ResolversTypes['CarCategory']>>>, ParentType, ContextType>;
  getCategory?: Resolver<Maybe<ResolversTypes['CarCategory']>, ParentType, ContextType, Partial<QueryGetCategoryArgs>>;
  getUserCar?: Resolver<Maybe<ResolversTypes['Car']>, ParentType, ContextType, Partial<QueryGetUserCarArgs>>;
};

export type Resolvers<ContextType = any> = {
  Car?: CarResolvers<ContextType>;
  CarCategory?: CarCategoryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};


export type CarFieldsFragment = { __typename?: 'Car', id: string, name: string, rented: boolean };

export type GetCarListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCarListQuery = { __typename?: 'Query', getCarList: Array<{ __typename?: 'Car', id: string, name: string, rented: boolean }> };

export type GetCarQueryVariables = Exact<{
  getCarId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type GetCarQuery = { __typename?: 'Query', getCar?: { __typename?: 'Car', id: string, name: string, rented: boolean } | null };

export type CreateCarMutationVariables = Exact<{
  input: CarCreateInput;
}>;


export type CreateCarMutation = { __typename?: 'Mutation', createCar: { __typename?: 'Car', id: string, name: string, rented: boolean } };

export type DeleteCarMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteCarMutation = { __typename?: 'Mutation', deleteCar?: { __typename?: 'Car', id: string, name: string, rented: boolean } | null };

export type UpdateCarMutationVariables = Exact<{
  input: CarUpdateInput;
}>;


export type UpdateCarMutation = { __typename?: 'Mutation', updateCar: { __typename?: 'Car', id: string, name: string, price: number, rented: boolean } };

export const CarFieldsFragmentDoc = gql`
    fragment CarFields on Car {
  id
  name
  rented
}
    `;
export const GetCarListDocument = gql`
    query GetCarList {
  getCarList {
    ...CarFields
  }
}
    ${CarFieldsFragmentDoc}`;

/**
 * __useGetCarListQuery__
 *
 * To run a query within a React component, call `useGetCarListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCarListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCarListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCarListQuery(baseOptions?: Apollo.QueryHookOptions<GetCarListQuery, GetCarListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCarListQuery, GetCarListQueryVariables>(GetCarListDocument, options);
      }
export function useGetCarListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCarListQuery, GetCarListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCarListQuery, GetCarListQueryVariables>(GetCarListDocument, options);
        }
export function useGetCarListSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetCarListQuery, GetCarListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCarListQuery, GetCarListQueryVariables>(GetCarListDocument, options);
        }
export type GetCarListQueryHookResult = ReturnType<typeof useGetCarListQuery>;
export type GetCarListLazyQueryHookResult = ReturnType<typeof useGetCarListLazyQuery>;
export type GetCarListSuspenseQueryHookResult = ReturnType<typeof useGetCarListSuspenseQuery>;
export type GetCarListQueryResult = Apollo.QueryResult<GetCarListQuery, GetCarListQueryVariables>;
export const GetCarDocument = gql`
    query GetCar($getCarId: ID) {
  getCar(id: $getCarId) {
    ...CarFields
  }
}
    ${CarFieldsFragmentDoc}`;

/**
 * __useGetCarQuery__
 *
 * To run a query within a React component, call `useGetCarQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCarQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCarQuery({
 *   variables: {
 *      getCarId: // value for 'getCarId'
 *   },
 * });
 */
export function useGetCarQuery(baseOptions?: Apollo.QueryHookOptions<GetCarQuery, GetCarQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCarQuery, GetCarQueryVariables>(GetCarDocument, options);
      }
export function useGetCarLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCarQuery, GetCarQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCarQuery, GetCarQueryVariables>(GetCarDocument, options);
        }
export function useGetCarSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetCarQuery, GetCarQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCarQuery, GetCarQueryVariables>(GetCarDocument, options);
        }
export type GetCarQueryHookResult = ReturnType<typeof useGetCarQuery>;
export type GetCarLazyQueryHookResult = ReturnType<typeof useGetCarLazyQuery>;
export type GetCarSuspenseQueryHookResult = ReturnType<typeof useGetCarSuspenseQuery>;
export type GetCarQueryResult = Apollo.QueryResult<GetCarQuery, GetCarQueryVariables>;
export const CreateCarDocument = gql`
    mutation CreateCar($input: CarCreateInput!) {
  createCar(input: $input) {
    ...CarFields
  }
}
    ${CarFieldsFragmentDoc}`;
export type CreateCarMutationFn = Apollo.MutationFunction<CreateCarMutation, CreateCarMutationVariables>;

/**
 * __useCreateCarMutation__
 *
 * To run a mutation, you first call `useCreateCarMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCarMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCarMutation, { data, loading, error }] = useCreateCarMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateCarMutation(baseOptions?: Apollo.MutationHookOptions<CreateCarMutation, CreateCarMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCarMutation, CreateCarMutationVariables>(CreateCarDocument, options);
      }
export type CreateCarMutationHookResult = ReturnType<typeof useCreateCarMutation>;
export type CreateCarMutationResult = Apollo.MutationResult<CreateCarMutation>;
export type CreateCarMutationOptions = Apollo.BaseMutationOptions<CreateCarMutation, CreateCarMutationVariables>;
export const DeleteCarDocument = gql`
    mutation DeleteCar($id: ID!) {
  deleteCar(id: $id) {
    ...CarFields
  }
}
    ${CarFieldsFragmentDoc}`;
export type DeleteCarMutationFn = Apollo.MutationFunction<DeleteCarMutation, DeleteCarMutationVariables>;

/**
 * __useDeleteCarMutation__
 *
 * To run a mutation, you first call `useDeleteCarMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCarMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCarMutation, { data, loading, error }] = useDeleteCarMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCarMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCarMutation, DeleteCarMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCarMutation, DeleteCarMutationVariables>(DeleteCarDocument, options);
      }
export type DeleteCarMutationHookResult = ReturnType<typeof useDeleteCarMutation>;
export type DeleteCarMutationResult = Apollo.MutationResult<DeleteCarMutation>;
export type DeleteCarMutationOptions = Apollo.BaseMutationOptions<DeleteCarMutation, DeleteCarMutationVariables>;
export const UpdateCarDocument = gql`
    mutation UpdateCar($input: CarUpdateInput!) {
  updateCar(input: $input) {
    id
    name
    price
    rented
  }
}
    `;
export type UpdateCarMutationFn = Apollo.MutationFunction<UpdateCarMutation, UpdateCarMutationVariables>;

/**
 * __useUpdateCarMutation__
 *
 * To run a mutation, you first call `useUpdateCarMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCarMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCarMutation, { data, loading, error }] = useUpdateCarMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateCarMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCarMutation, UpdateCarMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCarMutation, UpdateCarMutationVariables>(UpdateCarDocument, options);
      }
export type UpdateCarMutationHookResult = ReturnType<typeof useUpdateCarMutation>;
export type UpdateCarMutationResult = Apollo.MutationResult<UpdateCarMutation>;
export type UpdateCarMutationOptions = Apollo.BaseMutationOptions<UpdateCarMutation, UpdateCarMutationVariables>;