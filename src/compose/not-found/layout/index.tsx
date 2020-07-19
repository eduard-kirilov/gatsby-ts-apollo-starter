/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import React, { FC, memo } from 'react';

import { IChildren } from 'utils/interface';
import { Layout } from 'components/layout';

const LayoutWrapperMemo: FC<IChildren> = ({ children }) => (
  <Layout>{children}</Layout>
);

export const LayoutWrapper = memo(LayoutWrapperMemo);