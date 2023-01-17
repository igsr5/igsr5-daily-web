/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export enum AllowOrderField {
  Id = 'id',
  PublishedAt = 'published_at',
}

export type Category = {
  __typename?: 'Category';
  id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  posts?: Maybe<Array<Post>>;
};

export type CreatePostInput = {
  /** The content of the post */
  content: Scalars['String'];
  /** The subtitle of the post */
  subtitle?: InputMaybe<Scalars['String']>;
  /** The title of the post */
  title: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * create a post.
   * If the post is the first post in this month, a new category will be created
   */
  createPost?: Maybe<Post>;
};

export type MutationCreatePostArgs = {
  input?: InputMaybe<CreatePostInput>;
};

export type OrderByInputForPost = {
  field: AllowOrderField;
  order: Sort;
};

/** A post in a blog */
export type Post = {
  __typename?: 'Post';
  category?: Maybe<Category>;
  category_id?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  published_at: Scalars['DateTime'];
  subtitle?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  /** get a list of categories */
  categories?: Maybe<Array<Category>>;
  /** get a category by id */
  category?: Maybe<Category>;
  /** get a post by id */
  post?: Maybe<Post>;
  /** get a list of posts */
  posts?: Maybe<Array<Post>>;
};

export type QueryCategoryArgs = {
  id: Scalars['Int'];
};

export type QueryPostArgs = {
  id: Scalars['Int'];
};

export type QueryPostsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<OrderByInputForPost>;
};

export enum Sort {
  Asc = 'asc',
  Desc = 'desc',
}

export type GetAllCategoryIdsQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllCategoryIdsQuery = {
  __typename?: 'Query';
  categories?: Array<{ __typename?: 'Category'; id?: number | null }> | null;
};

export type GetCategoryByIdQueryVariables = Exact<{
  category_id: Scalars['Int'];
}>;

export type GetCategoryByIdQuery = {
  __typename?: 'Query';
  category?: {
    __typename?: 'Category';
    id?: number | null;
    name: string;
    posts?: Array<{
      __typename?: 'Post';
      id: number;
      title: string;
      subtitle?: string | null;
      published_at: any;
      category?: { __typename?: 'Category'; id?: number | null; name: string } | null;
    }> | null;
  } | null;
};

export type GetPostsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<OrderByInputForPost>;
}>;

export type GetPostsQuery = {
  __typename?: 'Query';
  posts?: Array<{
    __typename?: 'Post';
    id: number;
    title: string;
    subtitle?: string | null;
    published_at: any;
    category?: { __typename?: 'Category'; id?: number | null; name: string } | null;
  }> | null;
};

export const GetAllCategoryIdsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetAllCategoryIds' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'categories' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetAllCategoryIdsQuery, GetAllCategoryIdsQueryVariables>;
export const GetCategoryByIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetCategoryById' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'category_id' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'category' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'category_id' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'posts' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'subtitle' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'published_at' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'category' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetCategoryByIdQuery, GetCategoryByIdQueryVariables>;
export const GetPostsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getPosts' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'offset' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'orderBy' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'OrderByInputForPost' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'posts' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'offset' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'offset' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'orderBy' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'subtitle' } },
                { kind: 'Field', name: { kind: 'Name', value: 'published_at' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'category' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetPostsQuery, GetPostsQueryVariables>;

