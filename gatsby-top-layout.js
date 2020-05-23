/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import * as React from 'react';
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import {
  ThemeProvider as MuiThemeProvider,
  StylesProvider,
} from '@material-ui/styles';
import fetch from 'isomorphic-fetch';
import PropTypes from 'prop-types';

import { AuthProvider } from 'utils/authorize';
import { CssBaseline } from '@material-ui/core';
import { store } from './configureStore';
import theme from 'styles/theme';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: process.env.GATSBY_API_URL,
    credentials: 'include',
  }),
  fetch,
});

export function GatsbyTopLayout({ children }) {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <MuiThemeProvider theme={theme}>
          <StylesProvider injectFirst>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <AuthProvider>{children}</AuthProvider>
            </ThemeProvider>
          </StylesProvider>
        </MuiThemeProvider>
      </ApolloProvider>
    </Provider>
  );
}

GatsbyTopLayout.propTypes = {
  children: PropTypes.node,
};
