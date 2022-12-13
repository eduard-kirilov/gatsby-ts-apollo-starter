/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import React from 'react';
import { shallow } from 'enzyme';
import { ThemeProvider } from '@mui/material/styles';

import theme from 'styles/theme';
import { Footer } from './index';

describe('Footer Container', () => {
  describe('Footer', () => {
    const mount = shallow(
      <ThemeProvider theme={theme}>
        <Footer />
      </ThemeProvider>
    );
    it('<Footer /> is authorized test should work', () => {
      expect(mount.find('Footer')).toHaveLength(0);
    });
  });
});
