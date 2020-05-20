import * as React from 'react';
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { AuthProvider } from 'utils/authorize';
import { GlobalStyleAllPage } from 'styles/global-styled';
import { Provider } from 'react-redux';
import { store } from './configureStore';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles';
import fetch from 'isomorphic-fetch';
import PropTypes from 'prop-types';
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
          <ThemeProvider theme={theme}>
            <AuthProvider>{children}</AuthProvider>
            <GlobalStyleAllPage />
          </ThemeProvider>
        </MuiThemeProvider>
      </ApolloProvider>
    </Provider>
  );
}

GatsbyTopLayout.propTypes = {
  children: PropTypes.node,
};
