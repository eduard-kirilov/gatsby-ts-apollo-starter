/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import * as React from 'react';
import { shallow } from 'enzyme';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from 'styles/theme'
import { Layout } from './index';

interface IProps {
  loading: boolean;
}

describe('Layout Container', () => {
  const LayoutTest: React.FC<IProps> = ({ loading }) => {
    return (
      <ThemeProvider theme={theme}>
        <Layout
          loading={loading}
        >
          children
        </Layout>
      </ThemeProvider>
    );
  }
  describe('Layout container is loading', () => {
    const mount = shallow(<LayoutTest loading={true}/>);
    it('<Layout /> test should work', () => {
      expect(mount.find('Layout')).toHaveLength(0);
    });
    it('<LinearProgress /> test should work', () => {
      expect(mount.find('LinearProgress')).toHaveLength(0);
    });
  });

  describe('Layout container is not loading', () => {
    const mount = shallow(<LayoutTest loading={false}/>);
    it('<Layout /> test should work', () => {
      expect(mount.find('Layout')).toHaveLength(0);
    });
  });
});
