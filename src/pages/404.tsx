/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import * as React from 'react';

import { LayoutWrapper } from 'compose/not-found/layout';
import { ContentCompose } from 'compose/not-found/content';


const NotFoundPage: React.FC = () => (
  <LayoutWrapper>
    <ContentCompose page="notFound" />
  </LayoutWrapper>
);

export default NotFoundPage;