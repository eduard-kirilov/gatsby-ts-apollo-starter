/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import * as React from 'react';

import { LayoutWrapper } from 'containers/home/layout';
import { ContentContainer } from 'containers/home/content';


const Home: React.FC = () => (
  <LayoutWrapper>
    <ContentContainer page="home" />
  </LayoutWrapper>
);

export default Home;
