/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import * as React from 'react';
import { shallow } from 'enzyme';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from 'styles/theme';
import { TableProduct } from './index';
import { IProducts } from 'utils/interface';

describe('TableProduct', () => {
  const TableProductTest: React.FC<IProducts> = ({ products = [] }) => {
    return (
      <ThemeProvider theme={theme}>
        <TableProduct products={products} />
      </ThemeProvider>
    );
  };

  const products = [
    {
      _id: '1',
      url: 'https://images.unsplash.com/photo-1583317916915-503b629e81a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2081&q=80',
      title: 'Первая картинка',
      subtitle: 'Контент первой картинки',
    },
  ];
  describe('TableProduct container initial', () => {
    const mount = shallow(<TableProductTest products={products} />);
    it('TableProduct should work', () => {
      expect(mount.find('TableProduct')).toHaveLength(1);
    });
  });
});
