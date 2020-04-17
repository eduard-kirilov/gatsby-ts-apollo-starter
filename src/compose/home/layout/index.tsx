/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import * as React from 'react';

import { IChildren } from 'utils/interface';

import { LayoutCompose } from 'compose/admin/layout/layout';
import { PopupAuth } from 'compose/popup';
import { SEO } from 'components/seo';


export const LayoutWrapper: React.FC<IChildren> = ({ children }) => (
  <LayoutCompose>
    <SEO title="Home" />
    {children}
    <PopupAuth />
  </LayoutCompose>
)