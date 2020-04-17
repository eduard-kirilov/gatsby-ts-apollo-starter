/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import React from 'react';
import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import fetch from 'isomorphic-fetch';
import { store } from './configureStore';

export const client = new ApolloClient({
  uri: process.env.GATSBY_API_URL,
  fetch,
});

export const wrapRootElement = ({ element }) => (
  <Provider store={store}>
    <ApolloProvider client={client}>
      {element}
    </ApolloProvider>
  </Provider>
);
