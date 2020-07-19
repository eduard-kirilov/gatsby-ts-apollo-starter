/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import React, { FC, memo } from 'react';

import { InitCompose } from 'compose/admin/init';
import { LayoutWrapper } from 'compose/layout';
import { AdminCompose } from 'compose/admin';
import { Private } from 'components/private';
import { SEO } from 'components/seo';
import { AuthContext } from 'utils/authorize';

import { IAutorize } from 'utils/interface';

const Admin: FC = () => (
  <InitCompose>
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
  </InitCompose>
);

export default memo(Admin);