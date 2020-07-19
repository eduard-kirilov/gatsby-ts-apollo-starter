/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import React, { FC } from 'react';
import { shallow } from 'enzyme';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from 'styles/theme';
import { IProduct } from 'utils/interface';
import { PopupUpProduct } from './index';

interface IProps {
  product: IProduct;
};

describe('PopupUpProduct Container', () => {
  const PopupUpProductTest: FC<IProps> = ({ product }) => {
    return (
      <ThemeProvider theme={theme}>
        <PopupUpProduct
          handleClose={() => {}}
          handleUpProduct={() => {}}
          product={product}
        />
      </ThemeProvider>
    );
  }
  
  const product = {
    _id: '1',
    url: 'some text',
    title: 'some test',
    price: 'some test',
    subtitle: 'some test',
  }
  describe('PopupUpProduct container is open', () => {
    const mount = shallow(<PopupUpProductTest product={product} />);
    it('<PopupUpProduct /> test should work', () => {
      expect(mount.find('PopupUpProduct')).toHaveLength(0);
    });
  });
});
