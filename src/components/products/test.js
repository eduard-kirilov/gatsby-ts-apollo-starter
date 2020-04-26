/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import * as React from 'react';
import { createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from 'styles/theme'
import { Products } from './index';

describe('Content', () => {
  let mount;

  const ProductsTest = () => {
    return (
      <ThemeProvider theme={theme}>
        <Products />
      </ThemeProvider>
    );
  }

  beforeEach(() => {
    mount = createMount();
  });

  afterEach(() => {
    mount.cleanUp();
  });

  it('Component Products should work', () => {
    mount(<ProductsTest />);
  });
});