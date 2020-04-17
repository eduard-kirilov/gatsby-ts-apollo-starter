/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import * as React from 'react';

import { LayoutWrapper } from 'compose/admin/layout';
import { ContentCompose } from 'compose/admin/content';


const Admin: React.FC = () => (
  <LayoutWrapper>
    <ContentCompose page="admin" />
  </LayoutWrapper>
);

export default Admin;