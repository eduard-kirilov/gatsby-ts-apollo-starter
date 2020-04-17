/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import * as React from 'react';

import { LayoutWrapper } from 'compose/shop/layout';
import { ContentCompose } from 'compose/shop/content';


const Shop: React.FC = () => (
  <LayoutWrapper>
    <ContentCompose page="shop" />
  </LayoutWrapper>
);

export default Shop;