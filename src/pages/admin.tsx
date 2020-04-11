/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import * as React from 'react';

import { LayoutWrapper } from 'containers/admin/layout';
import { ContentContainer } from 'containers/admin/content';


const Admin: React.FC = () => (
  <LayoutWrapper>
    <ContentContainer page="admin" />
  </LayoutWrapper>
);

export default Admin;