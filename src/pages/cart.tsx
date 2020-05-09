/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import * as React from 'react';

import { LayoutWrapper } from 'compose/layout';
import { SEO } from 'components/seo';
import { CartCompose } from 'compose/cart';
import { AuthContext } from 'utils/authorize';
import { IAutorize } from 'utils/interface';

const Blog: React.FC = () => (
  <AuthContext.Consumer>
    {(auth: IAutorize) => (
      <LayoutWrapper auth={auth}>
        <SEO title="Cart" />
        <CartCompose />
      </LayoutWrapper>
    )}
  </AuthContext.Consumer>
);

export default Blog;