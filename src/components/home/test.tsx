/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import * as React from 'react';
import { shallow } from 'enzyme';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from 'styles/theme'
import { Home } from './index';
import { IProducts } from 'utils/interface';

describe('Home', () => {
  const HomeTest: React.FC<IProducts>  = ({ products }) => {
    return (
      <ThemeProvider theme={theme}>
        <Home products={products} />
      </ThemeProvider>
    );
  }

  const products = [
    {
      _id: '1',
      url: 'https://images.unsplash.com/photo-1583317916915-503b629e81a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2081&q=80',
      title: 'Первая картинка',
      subtitle: 'Контент первой картинки',
    },
  ];

  describe('Home container initial', () => {
    const mount = shallow(<HomeTest products={products} />);
  it('Component Home should work', () => {
      expect(mount.find('ProductsTest')).toHaveLength(0);
    });
    it('Component CardProduct should work', () => {
      expect(mount.find('CardProduct')).toHaveLength(0);
    });
  });
});