/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import * as React from 'react';
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
}

export const LayoutWrapper: React.FC<IChildren & IProps> = ({
  children,
  auth,
}) => {
  const [openPopupAuth, setOpenPopupAuth] = React.useState(false);

  const { authorized, loading, currentUser } = auth;
  return (
    <Layout
      loading={loading}
    >
      <Header
        authorized={authorized}
        currentUser={currentUser}
        handleOpen={() => setOpenPopupAuth(true)}
      />
      {children}
      <PopupAuth
        open={openPopupAuth}
        handleClose={() => setOpenPopupAuth(false)}
      />
    </Layout>
  );
};
