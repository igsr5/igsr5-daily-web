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
  DateTime: any;
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
  content: Scalars['String'];
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
  Desc = 'desc'
}
