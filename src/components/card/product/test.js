/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import * as React from 'react';
import { createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from 'styles/theme'
import { CardProduct } from './index';

describe('CardProduct', () => {
  let mount;

  const CardProductTest = () => {
    return (
      <ThemeProvider theme={theme}>
        <CardProduct
          url="https://images.unsplash.com/photo-1583317916915-503b629e81a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2081&q=80"
          title="Первая картинка"
          subtitle="Контент первой картинки"
        />
      </ThemeProvider>
    );
  }

  beforeEach(() => {
    mount = createMount();
  });

  afterEach(() => {
    mount.cleanUp();
  });

  it('CardProduct Test should work', () => {
    mount(<CardProductTest />);
  });
});