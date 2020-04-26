/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import * as React from 'react';

import { LayoutWrapper } from 'compose/layout';
import { ProductsCompose } from 'compose/shop/products';
import { SEO } from 'components/seo';
import { AuthContext } from 'utils/authorize';

import { IAutorize } from 'utils/interface';

const Shop: React.FC = () => (
  <AuthContext.Consumer>
    {(auth: IAutorize) => (
      <LayoutWrapper auth={auth}>
        <SEO title="Shop" />
        <ProductsCompose />
      </LayoutWrapper>
    )}
  </AuthContext.Consumer>
);

export default Shop;