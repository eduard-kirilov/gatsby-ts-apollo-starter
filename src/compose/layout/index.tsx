/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import * as React from 'react';
import { useMutation } from '@apollo/client';

import { CURRENT_USER_QUERY } from 'gql/query';
import { LOGOUT_MUTATION } from 'gql/mutation';
import { IChildren } from 'utils/interface';

import { PopupAuthCompose } from 'compose/popup';
import { Layout } from 'components/layout';
import { HeaderWrapper } from './header';

interface IProps {
  auth: {
    authorized: boolean;
    loading: boolean;
    error?: string;
    currentUser?: any;
  };
}

export const LayoutWrapper: React.FC<IChildren & IProps> = ({
  children,
  auth,
}) => {
  const [logout] = useMutation(LOGOUT_MUTATION,
    {
      update: (cache) => cache.writeQuery({
        query: CURRENT_USER_QUERY,
        data: { currentUser: null },
      }),
    }
  )

  const { authorized, loading, currentUser } = auth;
  return (
    <Layout
      loading={loading}
    >
      <HeaderWrapper
        authorized={authorized}
        currentUser={currentUser}
        logout={logout}
      />
      {children}
      <PopupAuthCompose/>
    </Layout>
  );
};
