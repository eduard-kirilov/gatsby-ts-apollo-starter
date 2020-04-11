/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import * as React from 'react';

import { LayoutWrapper } from 'containers/not-found/layout';
import { ContentContainer } from 'containers/not-found/content';


const NotFoundPage: React.FC = () => (
  <LayoutWrapper>
    <ContentContainer page="notFound" />
  </LayoutWrapper>
);

export default NotFoundPage;