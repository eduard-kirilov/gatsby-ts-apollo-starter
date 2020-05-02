/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import * as React from 'react';
import { createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from 'styles/theme'
import { Header } from './index';

describe('Header', () => {
  let mount;

  const HeaderTest = () => {
    return (
      <ThemeProvider theme={theme}>
        <Header
          authorized={false}
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

  it('Header Test should work', () => {
    mount(<HeaderTest />);
  });
});