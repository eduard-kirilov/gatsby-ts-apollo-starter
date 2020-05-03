/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import * as React from 'react';
import { shallow } from 'enzyme';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from 'styles/theme'
import { PopupAuth } from './index';

describe('PopupAuth Container', () => {
  const PopupAuthTest: React.FC = () => {
    return (
      <ThemeProvider theme={theme}>
        <PopupAuth
            handleClose={() => {}}
            handleLogin={() => {}}
            handleSignup={() => {}}
        />
      </ThemeProvider>
    );
  }
  describe('PopupAuth container is open', () => {
    const mount = shallow(<PopupAuthTest />);
    it('<PopupAuth /> test should work', () => {
      expect(mount.find('PopupAuth')).toHaveLength(0);
    });
  });
});
