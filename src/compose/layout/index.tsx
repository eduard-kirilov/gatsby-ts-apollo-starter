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

import { PopupAuth } from 'compose/popup';
import { Layout } from 'components/layout';
import { Header } from 'components/header';

interface IProps {
  auth: {
    authorized: boolean;
    loading: boolean;
    error?: string;
    currentUser?: any;
  };
  productIds?: string[];
}

export const LayoutWrapper: React.FC<IChildren & IProps> = ({
  children,
  productIds,
  auth,
}) => {
  const [openPopupAuth, setOpenPopupAuth] = React.useState(false);
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
      <Header
        productIds={productIds}
        authorized={authorized}
        currentUser={currentUser}
        handleOpen={() => setOpenPopupAuth(true)}
        logout={logout}
      />
      {children}
      <PopupAuth
        open={openPopupAuth}
        handleClose={() => setOpenPopupAuth(false)}
      />
    </Layout>
  );
};
