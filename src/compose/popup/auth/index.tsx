/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import * as React from 'react';

import { PopupAuth as PopupAuthComponent } from 'components/popup';
import { Modal } from 'components/modal';

interface IProps {
  open: boolean;
  handleClose: () => void;
}

export const PopupAuth: React.FC<IProps> = ({
  open,
  handleClose,
}) => (
  <Modal
    open={open}
    handleClose={handleClose}
  >
    <PopupAuthComponent
      handleClose={handleClose}
    />
  </Modal>
)