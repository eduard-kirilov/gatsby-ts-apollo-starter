/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import * as React from 'react';

import { IChildren } from 'utils/interface';
import { ContainerStyled } from 'styles/custom/layout';

const LayoutWrapperMemo: React.FC<IChildren> = ({ children }) => (
  <ContainerStyled maxWidth="lg">{children}</ContainerStyled>
);

export const LayoutWrapper = React.memo(LayoutWrapperMemo);