/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A high precision floating point value represented as a string */
  BigFloat: { input: any; output: any; }
  /** An arbitrary size integer represented as a string */
  BigInt: { input: any; output: any; }
  /** An opaque string using for tracking a position in results during pagination */
  Cursor: { input: any; output: any; }
  /** A date wihout time information */
  Date: { input: any; output: any; }
  /** A date and time */
  Datetime: { input: any; output: any; }
  /** A Javascript Object Notation value serialized as a string */
  JSON: { input: any; output: any; }
  /** Any type not handled by the type system */
  Opaque: { input: any; output: any; }
  /** A time without date information */
  Time: { input: any; output: any; }
  /** A universally unique identifier */
  UUID: { input: any; output: any; }
};

/** Boolean expression comparing fields on type "BigFloat" */
export type BigFloatFilter = {
  eq?: InputMaybe<Scalars['BigFloat']['input']>;
  gt?: InputMaybe<Scalars['BigFloat']['input']>;
  gte?: InputMaybe<Scalars['BigFloat']['input']>;
  in?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigFloat']['input']>;
  lte?: InputMaybe<Scalars['BigFloat']['input']>;
  neq?: InputMaybe<Scalars['BigFloat']['input']>;
};

/** Boolean expression comparing fields on type "BigInt" */
export type BigIntFilter = {
  eq?: InputMaybe<Scalars['BigInt']['input']>;
  gt?: InputMaybe<Scalars['BigInt']['input']>;
  gte?: InputMaybe<Scalars['BigInt']['input']>;
  in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigInt']['input']>;
  lte?: InputMaybe<Scalars['BigInt']['input']>;
  neq?: InputMaybe<Scalars['BigInt']['input']>;
};

/** Boolean expression comparing fields on type "Boolean" */
export type BooleanFilter = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  is?: InputMaybe<FilterIs>;
};

/** Boolean expression comparing fields on type "Date" */
export type DateFilter = {
  eq?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<Scalars['Date']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  neq?: InputMaybe<Scalars['Date']['input']>;
};

/** Boolean expression comparing fields on type "Datetime" */
export type DatetimeFilter = {
  eq?: InputMaybe<Scalars['Datetime']['input']>;
  gt?: InputMaybe<Scalars['Datetime']['input']>;
  gte?: InputMaybe<Scalars['Datetime']['input']>;
  in?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Datetime']['input']>;
  lte?: InputMaybe<Scalars['Datetime']['input']>;
  neq?: InputMaybe<Scalars['Datetime']['input']>;
};

export enum FilterIs {
  NotNull = 'NOT_NULL',
  Null = 'NULL'
}

/** Boolean expression comparing fields on type "Float" */
export type FloatFilter = {
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  neq?: InputMaybe<Scalars['Float']['input']>;
};

/** Boolean expression comparing fields on type "ID" */
export type IdFilter = {
  eq?: InputMaybe<Scalars['ID']['input']>;
};

/** Boolean expression comparing fields on type "Int" */
export type IntFilter = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  neq?: InputMaybe<Scalars['Int']['input']>;
};

/** The root type for creating and mutating data */
export type Mutation = {
  __typename?: 'Mutation';
  /** Deletes zero or more records from the `User` collection */
  deleteFromUserCollection: UserDeleteResponse;
  /** Deletes zero or more records from the `_prisma_migrations` collection */
  deleteFrom_prisma_migrationsCollection: _Prisma_MigrationsDeleteResponse;
  /** Adds one or more `User` records to the collection */
  insertIntoUserCollection?: Maybe<UserInsertResponse>;
  /** Adds one or more `_prisma_migrations` records to the collection */
  insertInto_prisma_migrationsCollection?: Maybe<_Prisma_MigrationsInsertResponse>;
  /** Updates zero or more records in the `User` collection */
  updateUserCollection: UserUpdateResponse;
  /** Updates zero or more records in the `_prisma_migrations` collection */
  update_prisma_migrationsCollection: _Prisma_MigrationsUpdateResponse;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromUserCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<UserFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFrom_Prisma_MigrationsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<_Prisma_MigrationsFilter>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoUserCollectionArgs = {
  objects: Array<UserInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertInto_Prisma_MigrationsCollectionArgs = {
  objects: Array<_Prisma_MigrationsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationUpdateUserCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<UserFilter>;
  set: UserUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdate_Prisma_MigrationsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<_Prisma_MigrationsFilter>;
  set: _Prisma_MigrationsUpdateInput;
};

export type Node = {
  /** Retrieves a record by `ID` */
  nodeId: Scalars['ID']['output'];
};

/** Boolean expression comparing fields on type "Opaque" */
export type OpaqueFilter = {
  eq?: InputMaybe<Scalars['Opaque']['input']>;
  is?: InputMaybe<FilterIs>;
};

/** Defines a per-field sorting order */
export enum OrderByDirection {
  /** Ascending order, nulls first */
  AscNullsFirst = 'AscNullsFirst',
  /** Ascending order, nulls last */
  AscNullsLast = 'AscNullsLast',
  /** Descending order, nulls first */
  DescNullsFirst = 'DescNullsFirst',
  /** Descending order, nulls last */
  DescNullsLast = 'DescNullsLast'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

/** The root type for querying data */
export type Query = {
  __typename?: 'Query';
  /** A pagable collection of type `_prisma_migrations` */
  _prisma_migrationsCollection?: Maybe<_Prisma_MigrationsConnection>;
  /** Retrieve a record by its `ID` */
  node?: Maybe<Node>;
  /** A pagable collection of type `User` */
  userCollection?: Maybe<UserConnection>;
};


/** The root type for querying data */
export type Query_Prisma_MigrationsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<_Prisma_MigrationsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<_Prisma_MigrationsOrderBy>>;
};


/** The root type for querying data */
export type QueryNodeArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root type for querying data */
export type QueryUserCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserOrderBy>>;
};

/** Boolean expression comparing fields on type "String" */
export type StringFilter = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  is?: InputMaybe<FilterIs>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression comparing fields on type "Time" */
export type TimeFilter = {
  eq?: InputMaybe<Scalars['Time']['input']>;
  gt?: InputMaybe<Scalars['Time']['input']>;
  gte?: InputMaybe<Scalars['Time']['input']>;
  in?: InputMaybe<Array<Scalars['Time']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Time']['input']>;
  lte?: InputMaybe<Scalars['Time']['input']>;
  neq?: InputMaybe<Scalars['Time']['input']>;
};

/** Boolean expression comparing fields on type "UUID" */
export type UuidFilter = {
  eq?: InputMaybe<Scalars['UUID']['input']>;
  in?: InputMaybe<Array<Scalars['UUID']['input']>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Scalars['UUID']['input']>;
};

export type User = Node & {
  __typename?: 'User';
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
};

export type UserConnection = {
  __typename?: 'UserConnection';
  edges: Array<UserEdge>;
  pageInfo: PageInfo;
};

export type UserDeleteResponse = {
  __typename?: 'UserDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<User>;
};

export type UserEdge = {
  __typename?: 'UserEdge';
  cursor: Scalars['String']['output'];
  node: User;
};

export type UserFilter = {
  id?: InputMaybe<UuidFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
};

export type UserInsertInput = {
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UserInsertResponse = {
  __typename?: 'UserInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<User>;
};

export type UserOrderBy = {
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
};

export type UserUpdateInput = {
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UserUpdateResponse = {
  __typename?: 'UserUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<User>;
};

export type _Prisma_Migrations = Node & {
  __typename?: '_prisma_migrations';
  applied_steps_count: Scalars['Int']['output'];
  checksum: Scalars['String']['output'];
  finished_at?: Maybe<Scalars['Datetime']['output']>;
  id: Scalars['String']['output'];
  logs?: Maybe<Scalars['String']['output']>;
  migration_name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  rolled_back_at?: Maybe<Scalars['Datetime']['output']>;
  started_at: Scalars['Datetime']['output'];
};

export type _Prisma_MigrationsConnection = {
  __typename?: '_prisma_migrationsConnection';
  edges: Array<_Prisma_MigrationsEdge>;
  pageInfo: PageInfo;
};

export type _Prisma_MigrationsDeleteResponse = {
  __typename?: '_prisma_migrationsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<_Prisma_Migrations>;
};

export type _Prisma_MigrationsEdge = {
  __typename?: '_prisma_migrationsEdge';
  cursor: Scalars['String']['output'];
  node: _Prisma_Migrations;
};

export type _Prisma_MigrationsFilter = {
  applied_steps_count?: InputMaybe<IntFilter>;
  checksum?: InputMaybe<StringFilter>;
  finished_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<StringFilter>;
  logs?: InputMaybe<StringFilter>;
  migration_name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  rolled_back_at?: InputMaybe<DatetimeFilter>;
  started_at?: InputMaybe<DatetimeFilter>;
};

export type _Prisma_MigrationsInsertInput = {
  applied_steps_count?: InputMaybe<Scalars['Int']['input']>;
  checksum?: InputMaybe<Scalars['String']['input']>;
  finished_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  logs?: InputMaybe<Scalars['String']['input']>;
  migration_name?: InputMaybe<Scalars['String']['input']>;
  rolled_back_at?: InputMaybe<Scalars['Datetime']['input']>;
  started_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type _Prisma_MigrationsInsertResponse = {
  __typename?: '_prisma_migrationsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<_Prisma_Migrations>;
};

export type _Prisma_MigrationsOrderBy = {
  applied_steps_count?: InputMaybe<OrderByDirection>;
  checksum?: InputMaybe<OrderByDirection>;
  finished_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  logs?: InputMaybe<OrderByDirection>;
  migration_name?: InputMaybe<OrderByDirection>;
  rolled_back_at?: InputMaybe<OrderByDirection>;
  started_at?: InputMaybe<OrderByDirection>;
};

export type _Prisma_MigrationsUpdateInput = {
  applied_steps_count?: InputMaybe<Scalars['Int']['input']>;
  checksum?: InputMaybe<Scalars['String']['input']>;
  finished_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  logs?: InputMaybe<Scalars['String']['input']>;
  migration_name?: InputMaybe<Scalars['String']['input']>;
  rolled_back_at?: InputMaybe<Scalars['Datetime']['input']>;
  started_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type _Prisma_MigrationsUpdateResponse = {
  __typename?: '_prisma_migrationsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<_Prisma_Migrations>;
};

export type AddUserMutationVariables = Exact<{
  id: Scalars['UUID']['input'];
  name: Scalars['String']['input'];
}>;


export type AddUserMutation = { __typename?: 'Mutation', insertIntoUserCollection?: { __typename?: 'UserInsertResponse', affectedCount: number, records: Array<{ __typename?: 'User', id: any, name: string }> } | null };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', userCollection?: { __typename?: 'UserConnection', edges: Array<{ __typename?: 'UserEdge', node: { __typename?: 'User', name: string } }> } | null };


export const AddUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insertIntoUserCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affectedCount"}},{"kind":"Field","name":{"kind":"Name","value":"records"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<AddUserMutation, AddUserMutationVariables>;
export const GetUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetUsersQuery, GetUsersQueryVariables>;