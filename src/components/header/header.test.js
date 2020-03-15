import React from 'react';
import { createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from '../../styles/theme'
import { Header } from './index';

describe('Header', () => {
  let mount;

  const HeaderTest = () => {
    return (
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    );
  }

  beforeEach(() => {
    mount = createMount();
  });

  afterEach(() => {
    mount.cleanUp();
  });

  it('Component Header should work', () => {
    mount(<HeaderTest />);
  });
});