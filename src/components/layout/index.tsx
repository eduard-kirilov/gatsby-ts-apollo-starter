/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import * as React from 'react';

import { IChildren } from 'utils/interface';
import { ContainerStyled, LinearProgressStyled } from './styles';

interface IProps {
  loading: boolean;
}

export const Layout: React.FC<IChildren & IProps> = ({
  children,
  loading,
}) => (
  <>
    {loading && <LinearProgressStyled />}
    <ContainerStyled maxWidth="lg">
      {children}
    </ContainerStyled>
  </>
);
