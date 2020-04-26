/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import * as React from 'react';
import { useMutation } from '@apollo/client';

import { CURRENT_USER_QUERY } from 'gql/query';
import { LOGIN_MUTATION, SIGNUP__MUTATION } from 'gql/mutation';
import { PopupAuth as PopupAuthComponent } from 'components/popup';
import { Modal } from 'components/modal';
import { IClasses, IAllStringProps } from 'utils/interface';

interface IProps {
  open: boolean;
  handleClose: () => void;
}

export const PopupAuth: React.FC<IProps> = ({
  open,
  handleClose,
}) => {
  const [signup] = useMutation(
    SIGNUP__MUTATION,
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
      <PopupAuthComponent
        handleLogin={handleLogin}
        handleSignup={handleSignup}
        handleClose={handleClose}
      />
    </Modal>
  )
}