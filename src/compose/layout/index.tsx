/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import * as React from 'react';

import { IChildren } from 'utils/interface';

import { PopupAuth } from 'compose/popup';
import { Layout } from 'components/layout'
import { Header } from 'components/header'

export const LayoutWrapper: React.FC<IChildren> = ({ children }) => {
const [openPopupAuth, setOpenPopupAuth] = React.useState(false)
  return (
    <Layout>
      <Header
        handleOpen={() => setOpenPopupAuth(true)}
      />
      {children}
      <PopupAuth
        open={openPopupAuth}
        handleClose={() => setOpenPopupAuth(false)}
      />
    </Layout>
  );
}