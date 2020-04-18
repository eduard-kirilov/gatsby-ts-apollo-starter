/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import * as React from 'react';

import { LayoutWrapper } from 'compose/not-found/layout';
import { Content } from 'components/content';
import { SEO } from 'components/seo';

const NotFoundPage: React.FC = () => (
  <LayoutWrapper>
    <SEO title="404: Not found" />
    <Content page="notFound" />
  </LayoutWrapper>
);

export default NotFoundPage;