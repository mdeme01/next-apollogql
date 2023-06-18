'use client';

import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { csrApolloClient } from '@/apollo/apollo-client';

export default function CsrLayout({ children }: { children: React.ReactNode }) {
  return <ApolloProvider client={csrApolloClient}>{children}</ApolloProvider>;
}
