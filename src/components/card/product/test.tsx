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
  // let mount: any;

  const CardProductTest: React.FC = () => {
    return (
      <ThemeProvider theme={theme}>
        <CardProduct
          url="https://images.unsplash.com/photo-1583317916915-503b629e81a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2081&q=80"
          title="Первая картинка"
          subtitle="Контент первой картинки"
        />
      </ThemeProvider>
    );
  };

  describe('CardProduct container initial', () => {
    const mount = shallow(<CardProductTest />);
  it('CardProduct Test should work', () => {
      expect(mount.find('CardProduct')).toHaveLength(0);
    });
  });
});