/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import React, { FC, memo } from 'react';

import { IChildren } from 'utils/interface';
import { Footer } from 'components/footer';

import {
  ContainerStyled,
  Wrapper,
} from './styled';

export const LayoutMemo: FC<IChildren> = ({ children }) => (
  <Wrapper>
    <ContainerStyled maxWidth="lg">{children}</ContainerStyled>
    <Footer />
  </Wrapper>
);

export const Layout = memo(LayoutMemo);
