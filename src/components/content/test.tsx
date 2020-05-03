/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import * as React from 'react';
import { shallow } from 'enzyme';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from 'styles/theme';
import { Content } from './index';
import { IAllStringProps } from 'utils/interface';

describe('Content', () => {
  const ContentTest: React.FC<IAllStringProps> = ({ page }) => {
    return (
      <ThemeProvider theme={theme}>
        <Content page={page} />
      </ThemeProvider>
    );
  };

  describe('Content container initial', () => {
    const mount = shallow(<ContentTest page='admin' />);
    it('Component Content by admin should work', () => {
      expect(mount.find('Content')).toHaveLength(1);
    });
  });
  describe('Content container initial', () => {
    const mount = shallow(<ContentTest page='notFound' />);
    it('Component Content by notFound should work', () => {
      expect(mount.find('Content')).toHaveLength(1);
    });
  });
});
