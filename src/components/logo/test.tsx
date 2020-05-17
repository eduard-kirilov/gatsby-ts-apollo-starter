/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import * as React from 'react';
import { shallow } from 'enzyme';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from 'styles/theme';
import { Logo } from './index';

describe('Logo Container', () => {
  describe('Logo', () => {
    const mount = shallow(
      <ThemeProvider theme={theme}>
        <Logo />
      </ThemeProvider>
    );
    it('<Logo /> is authorized test should work', () => {
      expect(mount.find('Logo')).toHaveLength(0);
    });
  });
});
