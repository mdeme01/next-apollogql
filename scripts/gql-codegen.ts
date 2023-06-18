import dotenv from 'dotenv';
import type { CodegenConfig } from '@graphql-codegen/cli';

dotenv.config();

const gqlEndpoint = `${process.env.SUPABASE_URL}/graphql/v1`;
const apiKey = `${process.env.SUPABASE_ANON_KEY}`;

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      [gqlEndpoint]: {
        headers: {
          apiKey,
        },
      },
    },
  ],
  documents: ['src/graphql/docs.queries.graphql', 'src/graphql/docs.mutations.graphql'],
  generates: {
    'src/graphql/generated/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
        fragmentMasking: false,
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
