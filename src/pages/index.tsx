/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import * as React from 'react';

import { InitializationWrapper } from 'compose/home/initialization';
import { LayoutWrapper } from 'compose/layout';
import { ProductsCompose } from 'compose/home';

import { SEO } from 'components/seo';

import { AuthContext } from 'utils/authorize';
import { IAutorize } from 'utils/interface';

const Home: React.FC = () => (
  <InitializationWrapper>
    <AuthContext.Consumer>
      {(auth: IAutorize) => (
        <LayoutWrapper auth={auth}>
          <SEO title="Home" />
          <ProductsCompose />
        </LayoutWrapper>
      )}
    </AuthContext.Consumer>
  </InitializationWrapper>
);

export default Home;
