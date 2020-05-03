/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import * as React from 'react';
import { shallow } from 'enzyme';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from 'styles/theme'
import { Products } from './index';
import { IProductsProps } from 'utils/interface';

describe('Products', () => {
  const ProductsTest: React.FC<IProductsProps>  = ({ products }) => {
    return (
      <ThemeProvider theme={theme}>
        <Products products={products} />
      </ThemeProvider>
    );
  }

  const products = [
    {
      url: 'https://images.unsplash.com/photo-1583317916915-503b629e81a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2081&q=80',
      title: 'Первая картинка',
      subtitle: 'Контент первой картинки',
    },
  ];

  describe('Products container initial', () => {
    const mount = shallow(<ProductsTest products={products} />);
  it('Component Products should work', () => {
      expect(mount.find('ProductsTest')).toHaveLength(0);
    });
    it('Component CardProduct should work', () => {
      expect(mount.find('CardProduct')).toHaveLength(0);
    });
  });
});