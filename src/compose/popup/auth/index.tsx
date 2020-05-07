/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import * as React from 'react';
import { useMutation } from '@apollo/client';

import { CURRENT_USER_QUERY } from 'gql/query';
import { LOGIN_MUTATION, SIGNUP_MUTATION } from 'gql/mutation';
import { PopupAuth } from 'components/popup';
import { Modal } from 'components/modal';
import { IAllStringProps } from 'utils/interface';

interface IProps {
  open: boolean;
  handleClose: () => void;
}

export const PopupAuthCompose: React.FC<IProps> = ({
  open,
  handleClose,
}) => {
  const [signup] = useMutation(
    SIGNUP_MUTATION,
    {
      update: (cache, { data }) => cache.writeQuery({
        query: CURRENT_USER_QUERY,
        data: {
          currentUser: data.signup
        },
      }),
    }
  );
  const [login] = useMutation(
    LOGIN_MUTATION,
    {
      update: (cache, { data }) => cache.writeQuery({
        query: CURRENT_USER_QUERY,
        data: {
          currentUser: data.login, 
        },
      }),
    }
  )

  const handleSignup = (userData: IAllStringProps) => {
    signup({ variables: userData })
  }
  const handleLogin = (userData: IAllStringProps) => {
    login({ variables: userData })
  }

  return (
    <Modal
      open={open}
      handleClose={handleClose}
    >
      <PopupAuth
        handleClose={handleClose}
        handleLogin={handleLogin}
        handleSignup={handleSignup}
      />
    </Modal>
  )
}