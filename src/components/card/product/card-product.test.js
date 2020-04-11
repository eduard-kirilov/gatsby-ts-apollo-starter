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

  const ComponentTest = () => {
    return (
      <ThemeProvider theme={theme}>
        <CardProduct />
      </ThemeProvider>
    );
  }

  beforeEach(() => {
    mount = createMount();
  });

  afterEach(() => {
    mount.cleanUp();
  });

  it('Component Header should work', () => {
    mount(<ComponentTest />);
  });
});