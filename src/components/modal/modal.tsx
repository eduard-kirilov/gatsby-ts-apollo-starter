/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import * as React from 'react';
import { IClasses, IChildren } from 'utils/interface';

import { Modal as ModalMatireal, Backdrop, Fade } from '@material-ui/core';

interface IProps {
  handleClose?: () => void;
  open?: boolean;
}

export const Modal: React.FC<IProps & IClasses & IChildren> = ({
  classes,
  children,
  handleClose,
  open = false,
}) => (
  <ModalMatireal
    aria-labelledby="transition-modal-title"
    aria-describedby="transition-modal-description"
    className={classes.modal}
    open={open}
    onClose={handleClose}
    closeAfterTransition
    BackdropComponent={Backdrop}
    BackdropProps={{
      timeout: 500,
    }}
  >
    <Fade in={open}>
      <div className={classes.modalWrap}>{children}</div>
    </Fade>
  </ModalMatireal>
);
