/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import * as React from 'react';
import { shallow } from 'enzyme';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from 'styles/theme'
import { CardProduct } from './index';

describe('CardProduct', () => {
  const CardProductTest: React.FC = () => {
    return (
      <ThemeProvider theme={theme}>
        <CardProduct
          _id="1"
          addToCard={() => {}}
          url="some text"
          price="some text"
          title="some text"
          subtitle="some text"
        />
      </ThemeProvider>
    );
  };

  describe('CardProduct container initial', () => {
    const mount = shallow(<CardProductTest />);
  it('CardProduct Test should work', () => {
      expect(mount.find('CardProduct')).toHaveLength(1);
    });
  });
});