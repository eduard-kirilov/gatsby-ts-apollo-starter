/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import React from 'react';
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import fetch from 'isomorphic-fetch';
import { Provider } from 'react-redux';
import { AuthProvider } from 'utils/authorize';
import { store } from './configureStore';

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: process.env.GATSBY_API_URL,
    credentials: 'include',
  }),
  fetch,
});

export const wrapRootElement = ({ element }) => (
  <Provider store={store}>
    <ApolloProvider client={client}>
      <AuthProvider>{element}</AuthProvider>
    </ApolloProvider>
  </Provider>
);
