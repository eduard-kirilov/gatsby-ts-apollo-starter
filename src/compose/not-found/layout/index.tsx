/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import * as React from 'react';

import { IChildren } from 'utils/interface';
import { Layout } from 'components/layout';

const LayoutWrapperMemo: React.FC<IChildren> = ({ children }) => (
  <Layout>{children}</Layout>
);

export const LayoutWrapper = React.memo(LayoutWrapperMemo);