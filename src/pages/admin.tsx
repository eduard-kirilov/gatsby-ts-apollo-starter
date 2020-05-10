/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import * as React from 'react';

import { InitializationWrapper } from 'compose/admin/initialization';
import { LayoutWrapper } from 'compose/layout';
import { AdminCompose } from 'compose/admin';
import { Private } from 'components/private';
import { SEO } from 'components/seo';
import { AuthContext } from 'utils/authorize';

import { IAutorize } from 'utils/interface';

const Admin: React.FC = () => (
  <InitializationWrapper>
    <AuthContext.Consumer>
      {(auth: IAutorize) => (
        <Private loading={auth.loading} authorized={auth.authorized}>
          <LayoutWrapper auth={auth}>
            <SEO title="Admin" />
            <AdminCompose />
          </LayoutWrapper>
        </Private>
      )}
    </AuthContext.Consumer>
  </InitializationWrapper>
);

export default Admin;