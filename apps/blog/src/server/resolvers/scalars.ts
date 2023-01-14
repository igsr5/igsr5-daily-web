import { GraphQLScalarType } from 'graphql';
import { DateTimeResolver } from 'graphql-scalars';

type GraphqlScalarTypeMap = { [key: string]: GraphQLScalarType };
export const scalars: GraphqlScalarTypeMap = {
  DateTime: DateTimeResolver,
};
