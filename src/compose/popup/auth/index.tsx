/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import * as React from 'react';
import { useMutation } from '@apollo/client';

import { CURRENT_USER_QUERY } from 'gql/query';
import { LOGIN_MUTATION, SIGNUP_MUTATION } from 'gql/mutation';
import { PopupAuthWrapper } from './auth';
import { ModalWrapper } from './modal';
import { IAllStringProps } from 'utils/interface';

export const PopupAuthCompose: React.FC = () => {
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
    <ModalWrapper>
      <PopupAuthWrapper
        handleLogin={handleLogin}
        handleSignup={handleSignup}
      />
    </ModalWrapper>
  )
}