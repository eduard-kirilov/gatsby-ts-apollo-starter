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
        <Home
          products={products}
          addToCard={()=>{}}
        />
      </ThemeProvider>
    );
  }

  const products = [
    {
      _id: '1',
      url: 'some test',
      title: 'some test',
      price: 'some test',
      subtitle: 'some test',
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