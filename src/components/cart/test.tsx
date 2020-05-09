/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import * as React from 'react';
import { shallow } from 'enzyme';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from 'styles/theme';
import { Cart } from './index';

describe('Cart', () => {
  const CartTest: React.FC = () => {
    return (
      <ThemeProvider theme={theme}>
        <Cart
          table={null}
          hadleOpenPopupAddProduct={() => {}}
        />
      </ThemeProvider>
    );
  };

  describe('Cart container initial', () => {
    const mount = shallow(<CartTest />);
    it('Component Cart should work', () => {
      expect(mount.find('Cart')).toHaveLength(1);
    });
  });
});
