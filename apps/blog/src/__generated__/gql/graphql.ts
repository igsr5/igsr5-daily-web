/* eslint-disable */
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
  Date: any;
};

export enum AllowOrderField {
  Id = 'id',
  PublishedAt = 'published_at'
}

export type Category = {
  __typename?: 'Category';
  id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  posts?: Maybe<Array<Post>>;
};

export type OrderByInputForPost = {
  field: AllowOrderField;
  order: Sort;
};

/** A post in a blog */
export type Post = {
  __typename?: 'Post';
  category?: Maybe<Category>;
  content: Scalars['String'];
  id: Scalars['Int'];
  published_at: Scalars['Date'];
  subtitle?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  /** get a post by id */
  post?: Maybe<Post>;
  /** get a list of posts */
  posts?: Maybe<Array<Post>>;
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
  Desc = 'desc'
}
