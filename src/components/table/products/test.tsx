/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import * as React from 'react';
import { shallow } from 'enzyme';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from 'styles/theme';
import { TableProducts } from './index';
import { IProducts } from 'utils/interface';

describe('TableProducts', () => {
  const TableProductsTest: React.FC<IProducts> = ({ products = { data: [] } }) => {
    return (
      <ThemeProvider theme={theme}>
        <TableProducts
          products={products}
          handleOpen={()=>{}}
          handleChangePage={() => {}}
          handleChangeRowsPerPage={() => {}}
          handleDelProduct={() => {}}
          toggleDirection={() => {}}
          perPage={5}
          direction={'ASC'}
        />
      </ThemeProvider>
    );
  };

  const products = {
    data: [
      {
        _id: '1',
        url: 'some text',
        title: 'some test',
        price: 'some test',
        subtitle: 'some test',
      },
    ],
    total: 1,
    page: 0,
  };
  describe('TableProducts container initial', () => {
    const mount = shallow(<TableProductsTest products={products} />);
    it('TableProducts should work', () => {
      expect(mount.find('TableProducts')).toHaveLength(0);
    });
  });
});
