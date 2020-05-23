/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import * as React from 'react';

import { IChildren } from 'utils/interface';
import { Footer } from 'components/footer';

import {
  ContainerStyled,
  Wrapper,
} from './styled';

export const LayoutMemo: React.FC<IChildren> = ({ children }) => (
  <Wrapper>
    <ContainerStyled maxWidth="lg">{children}</ContainerStyled>
    <Footer />
  </Wrapper>
);

export const Layout = React.memo(LayoutMemo);
