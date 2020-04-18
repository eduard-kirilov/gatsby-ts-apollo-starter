/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import * as React from 'react';

import { LayoutWrapper } from 'compose/layout';
import { Content } from 'components/content';
import { SEO } from 'components/seo';

const Home: React.FC = () => (
  <LayoutWrapper>
    <SEO title="Home" />
    <Content page="home" />
  </LayoutWrapper>
);

export default Home;
