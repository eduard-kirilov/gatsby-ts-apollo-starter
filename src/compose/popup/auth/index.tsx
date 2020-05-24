/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useMutation } from '@apollo/client';

import { CURRENT_USER_QUERY } from 'gql/query';
import { LOGIN_MUTATION, SIGNUP_MUTATION } from 'gql/mutation';
import { actions, get } from 'stores/modals';
import { PopupAuth } from 'components/popup';
import { Modal } from 'components/modal';
import { AlertUser } from 'components/alert';
import { IAllStringProps } from 'utils/interface';

const { closeLogin } = actions;
const { getLoginModalsStatus } = get;

const PopupAuthComposeMemo: React.FC = () => {
  const open = useSelector(getLoginModalsStatus);
  const [openAlert, setOpenAlert] = React.useState(false);
  const [error, setError] = React.useState<string>();
  const dispatch = useDispatch();

  const [signup] = useMutation(SIGNUP_MUTATION, {
    update: (cache, { data }) =>
      cache.writeQuery({
        query: CURRENT_USER_QUERY,
        data: {
          currentUser: data.signup,
        },
      }),
    onCompleted: () => {
      setError(undefined);
      setOpenAlert(true);
    },
    onError: (err) => {
      setError(err.message);
      setOpenAlert(true);
    },
  });

  const [login] = useMutation(LOGIN_MUTATION, {
    update: (cache, { data }) =>
      cache.writeQuery({
        query: CURRENT_USER_QUERY,
        data: {
          currentUser: data.login,
        },
      }),
    onCompleted: () => {
      setError(undefined);
      setOpenAlert(true);
    },
    onError: (err) => {
      setError(err.message);
      setOpenAlert(true);
    },
  });

  const handleCloseAlert = (_?: React.SyntheticEvent, reason?: string) => {
    if (reason !== 'clickaway') {
      setOpenAlert(false);
    }
  };

  const handleSignup = (userData: IAllStringProps) => {
    signup({ variables: userData });
  };

  const handleLogin = (userData: IAllStringProps) => {
    login({ variables: userData });
  };

  const handleClose = () => dispatch(closeLogin());

  return (
    <>
      <Modal open={open} handleClose={handleClose}>
        <PopupAuth
          handleLogin={handleLogin}
          handleSignup={handleSignup}
          handleClose={handleClose}
        />
      </Modal>
      <AlertUser
        openAlert={openAlert}
        error={error}
        handleClose={handleCloseAlert}
      />
    </>
  );
};

export const PopupAuthCompose = React.memo(PopupAuthComposeMemo);
