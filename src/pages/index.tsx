/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import * as React from 'react';

import { LayoutWrapper } from 'compose/home/layout';
import { ContentCompose } from 'compose/home/content';


const Home: React.FC = () => (
  <LayoutWrapper>
    <ContentCompose page="home" />
  </LayoutWrapper>
);

export default Home;
