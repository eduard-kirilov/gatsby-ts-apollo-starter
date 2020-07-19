/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import React, { FC, memo } from 'react';

import { InitCompose } from 'compose/admin/init';
import { LayoutWrapper } from 'compose/layout';
import { SEO } from 'components/seo';
import { CartCompose } from 'compose/cart';
import { AuthContext } from 'utils/authorize';
import { IAutorize } from 'utils/interface';

const Cart: FC = () => (
  <InitCompose>
    <AuthContext.Consumer>
      {(auth: IAutorize) => (
        <LayoutWrapper auth={auth}>
          <SEO title="Cart" />
          <CartCompose />
        </LayoutWrapper>
      )}
    </AuthContext.Consumer>
  </InitCompose>
);

export default  memo(Cart);