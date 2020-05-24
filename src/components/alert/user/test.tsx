/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import * as React from 'react';
import { shallow } from 'enzyme';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from 'styles/theme'
import { AlertUser } from './index';


describe('AlertUser Container', () => {
  const AlertUserTest: React.FC = () => {
    return (
      <ThemeProvider theme={theme}>
        <AlertUser
          loading={false}
        />
      </ThemeProvider>
    );
  }
  describe('AlertUser container is open', () => {
    const mount = shallow(<AlertUserTest />);
    it('<AlertUser /> test should work', () => {
      expect(mount.find('AlertUser')).toHaveLength(0);
    });
  });
});
