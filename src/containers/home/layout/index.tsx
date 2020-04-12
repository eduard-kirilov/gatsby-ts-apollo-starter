/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import * as React from 'react';

import { IChildren } from 'utils/interface';

import { LayoutContainer } from 'containers/admin/layout/layout';
import { PopupAuth } from 'containers/popup';
import { SEO } from 'components/seo';


export const LayoutWrapper: React.FC<IChildren> = ({ children }) => (
  <LayoutContainer
    auth={<PopupAuth />}
  >
    <SEO title="Home" />
    {children}
  </LayoutContainer>
)