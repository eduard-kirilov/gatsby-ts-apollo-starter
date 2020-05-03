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
import { IAllStringProps } from 'utils/interface';

describe('TableCart', () => {
  const TableCartTest: React.FC<IAllStringProps> = ({ page }) => {
    return (
      <ThemeProvider theme={theme}>
        <TableCart page={page} />
      </ThemeProvider>
    );
  };

  describe('TableCart container initial', () => {
    const mount = shallow(<TableCartTest page='admin' />);
    it('TableCart should work', () => {
      expect(mount.find('TableCart')).toHaveLength(1);
    });
  });
});
