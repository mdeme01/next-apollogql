# Use Supabase GraphQL with Next.js

This is an example application using the GraphQL server provided by Supabase, with Next.js.

## Usage

Install npm packages:

```
npm i
```

Create a `.env` file and provide the necessary variables.

```
cp .env.example .env
```

Define your database schema in the `prisma/prisma.schema` file

Run the migrations with

```
npm run migrate:dev
```

This will ask you to provide a name for the migration.

Go to the Supabase GraphiQL server (API Docs -> GraphiQL), here you can see the queries and mutations you can use.

Add the queries to the `graphql/docs.queries.graphql` file, and the mutations to the `graphql/docs.mutations.graphql` file.

After this, generate the GraphQL files with

```
npm run gql:codegen
```

Finally, create and export the queries and mutations in the `graphql/queries.ts` and `graphql/mutations.ts`.

You can either use CSR or SSR with Apollo Client, provided examples are in `app/csr/page.tsx` and `app/ssr/page.tsx`.

## Resources

[Prisma](https://www.prisma.io/docs) \
[Supabase](https://supabase.com/docs) \
[Apollo GraphQL](https://www.apollographql.com/docs/) \
[pg_graphql](https://supabase.github.io/pg_graphql/api/) \
[Next.js](https://nextjs.org/docs)
