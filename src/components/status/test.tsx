/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import * as React from 'react';
import { shallow } from 'enzyme';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from 'styles/theme'
import { LinearStatus } from './index';

describe('LinearStatus Container', () => {
  const LinearStatusTest: React.FC = () => {
    return (
      <ThemeProvider theme={theme}>
        <LinearStatus />
      </ThemeProvider>
    );
  }
  describe('LinearStatus container is open', () => {
    const mount = shallow(<LinearStatusTest />);
    it('<LinearStatus /> test should work', () => {
      expect(mount.find('LinearStatus')).toHaveLength(1);
    });
  });
});
