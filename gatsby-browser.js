/**
* React, Gatsby, Jest, TypeScript, GraphQL - Starter Kit
* https://github.com/eduard-kirilov/Online-store-5-frontend
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/

import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import fetch from 'isomorphic-fetch';

export const client = new ApolloClient({
  uri: process.env.GATSBY_API_URL,
  fetch,
});

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
);
