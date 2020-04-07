import * as React from 'react';
import { Modal as ModalMatireal, Backdrop, Fade } from '@material-ui/core';

interface IProps {
  classes: {
    [key: string]: string;
  };
  handleClose?: () => {};
  open?: boolean;
}

export const Modal: React.FC<IProps> = ({
  classes,
  children,
  handleClose,
  open = false,
}) => {
  return (
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
};
