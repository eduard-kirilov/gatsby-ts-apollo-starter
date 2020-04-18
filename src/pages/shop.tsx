/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import * as React from 'react';

import { LayoutWrapper } from 'compose/layout';
import { Products } from 'components/products';
import { SEO } from 'components/seo';

const Shop: React.FC = () => (
  <LayoutWrapper>
    <SEO title="Shop" />
    <Products />
  </LayoutWrapper>
);

export default Shop;