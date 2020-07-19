/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import React, { FC, SyntheticEvent, memo } from 'react';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

interface IProps {
  openAlert?: boolean;
  error?: any;
  handleClose: (_?: SyntheticEvent, type?: string) => void;
}

const AlertUserMemo: FC<IProps> = ({ openAlert, error, handleClose }) => {
  const severity = error ? 'error' : 'success';
  const text = error ? error : 'Success login!';

  return (
    <Snackbar
      open={openAlert}
      autoHideDuration={3000}
      onClose={handleClose}
      key="topcenter"
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert onClose={handleClose} variant="filled" severity={severity}>
        {text}
      </Alert>
    </Snackbar>
  );
};

export const AlertUser = memo(AlertUserMemo);
