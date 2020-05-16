/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import * as React from 'react';
import { shallow } from 'enzyme';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from 'styles/theme'
import { Modal } from './index';

interface IProps {
  handleClose?: () => void;
  open?: boolean;
}

describe('Modal Container', () => {
  const ModalTest: React.FC<IProps> = ({ open }) => {
    return (
      <ThemeProvider theme={theme}>
        <Modal
          open={open}
        >
          children
        </Modal>
      </ThemeProvider>
    );
  }
  describe('Layout container is open', () => {
    const mount = shallow(<ModalTest open={true}/>);
    it('<Modal /> test should work', () => {
      expect(mount.find('Modal')).toHaveLength(0);
    });
    it('<div>children</div> test should work', () => {
      expect(mount.find('div[aria-hidden="true"]')).toHaveLength(0);
    });
  });

  describe('Layout container is not open', () => {
    const mount = shallow(<ModalTest open={false}/>);
    it('<Modal /> test should work', () => {
      expect(mount.find('Modal')).toHaveLength(0);
    });
  });
});
