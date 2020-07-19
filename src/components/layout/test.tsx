/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import React from 'react';
import { shallow } from 'enzyme';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from 'styles/theme';
import { Layout } from './index';

describe('Layout Container', () => {
  describe('Layout', () => {
    const mount = shallow(
      <ThemeProvider theme={theme}>
        <Layout>
          <div>Test</div>
        </Layout>
      </ThemeProvider>
    );
    it('<Layout /> is authorized test should work', () => {
      expect(mount.find('Layout')).toHaveLength(0);
    });
  });
});
