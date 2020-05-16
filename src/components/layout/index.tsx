/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import * as React from 'react';

import { IChildren } from 'utils/interface';
import { ContainerStyled } from './styles';
import { LinearStatus } from 'components/status';
interface IProps {
  loading?: boolean;
}

const LayoutMemo: React.FC<IChildren & IProps> = ({
  children,
  loading = false,
}) => (
  <>
    {loading && <LinearStatus />}
    <ContainerStyled maxWidth="lg">
      {children}
    </ContainerStyled>
  </>
);

export const Layout = React.memo(LayoutMemo);
