/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import styled from 'styled-components';
import { Theme } from '@material-ui/core/styles';

import { Container, LinearProgress } from '@material-ui/core';

export const ContainerStyled = styled(Container)<{ theme: Theme }>`
  margin-top: ${({ theme }) => theme.mixins.toolbar.minHeight + 90}px;
`;
export const LinearProgressStyled = styled(LinearProgress)<{ theme: Theme }>`
  z-index: ${({ theme }) => theme.zIndex.drawer + 2},
`;