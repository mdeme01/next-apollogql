import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

export const csrApolloClient = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/graphql/v1`,
  cache: new InMemoryCache(),
  headers: {
    apiKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
  },
});

export const ssrApolloClient = new ApolloClient({
  ssrMode: true,
  link: createHttpLink({
    uri: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/graphql/v1`,
    credentials: 'same-origin',
    headers: {
      apiKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
    },
  }),
  cache: new InMemoryCache(),
});
