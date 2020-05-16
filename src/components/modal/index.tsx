/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import * as React from 'react';
import { IChildren } from 'utils/interface';

import { Backdrop, Fade } from '@material-ui/core';
import { ModalStyled, Wrapper } from './styles';

interface IProps {
  handleClose?: () => void;
  open?: boolean;
}

const ModalMemo: React.FC<IProps & IChildren> = ({
  children,
  handleClose,
  open = false,
}) => (
  <ModalStyled
    aria-labelledby="transition-modal-title"
    aria-describedby="transition-modal-description"
    open={open}
    onClose={handleClose}
    closeAfterTransition
    BackdropComponent={Backdrop}
    BackdropProps={{ timeout: 500 }}
  >
    <Fade in={open}>
      <Wrapper>{children}</Wrapper>
    </Fade>
  </ModalStyled>
);

export const Modal = React.memo(ModalMemo);