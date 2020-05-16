/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import * as React from 'react';
import { shallow } from 'enzyme';
import { ThemeProvider } from '@material-ui/core/styles';

import { IAllStringProps } from 'utils/interface';
import theme from 'styles/theme'
import { Header } from './index';

interface IHeaderProps {
  authorized: boolean;
  currentUser: IAllStringProps;
}

describe('Header Container', () => {
  const HeaderTest: React.FC<IHeaderProps> = ({ authorized, currentUser }) => {
    return (
      <ThemeProvider theme={theme}>
        <Header
          authorized={authorized}
          currentUser={currentUser}
        />
      </ThemeProvider>
    );
  }
  describe('Header container unauthorized', () => {
    const mount = shallow(<HeaderTest
      authorized={false}
      currentUser={null}
    />);

  it('<Header /> test should work', () => {
      expect(mount.find('Header')).toHaveLength(0);
    });
    it('<Button /> test should work', () => {
      expect(mount.find('button[aria-label="login"]')).toHaveLength(0);
    });
  });

  describe('Header container authorized', () => {
    const mount = shallow(<HeaderTest
      authorized={true}
      currentUser={{
        email: 'mail@mail.ru'
      }}
    />);
    it('<Header /> test should work', () => {
      expect(mount.find('Header')).toHaveLength(0);
    });
    it('<Profile /> test should work', () => {
      expect(mount.find('div[aria-label="account of current user"]')).toHaveLength(0);
    });
  });
});
