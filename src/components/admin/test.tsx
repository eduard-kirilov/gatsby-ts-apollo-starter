/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import * as React from 'react';
import { shallow } from 'enzyme';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from 'styles/theme';
import { Admin } from './index';

describe('Admin', () => {
  const AdminTest: React.FC = () => {
    return (
      <ThemeProvider theme={theme}>
        <Admin
          table={null}
          hadleOpenPopupAddProduct={() => {}}
        />
      </ThemeProvider>
    );
  };

  describe('Admin container initial', () => {
    const mount = shallow(<AdminTest />);
    it('Component Admin should work', () => {
      expect(mount.find('Admin')).toHaveLength(1);
    });
  });
});
