/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import * as React from 'react';
import { shallow } from 'enzyme';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from 'styles/theme';
import { TableCart } from './index';
import { IProducts } from 'utils/interface';

describe('TableCart', () => {
  const TableCartTest: React.FC<IProducts> = ({ products = [] }) => {
    return (
      <ThemeProvider theme={theme}>
        <TableCart products={products} />
      </ThemeProvider>
    );
  };

  const products = [
    {
      _id: '1',
      url: 'some text',
      title: 'some test',
      price: 'some test',
      subtitle: 'some test',
    },
  ];
  describe('TableCart container initial', () => {
    const mount = shallow(<TableCartTest products={products} />);
    it('TableCart should work', () => {
      expect(mount.find('TableCart')).toHaveLength(1);
    });
  });
});
