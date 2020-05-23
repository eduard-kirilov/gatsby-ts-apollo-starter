/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import styled from 'styled-components';
import { Theme } from '@material-ui/core/styles';

import { Container } from '@material-ui/core';

export const ContainerStyled = styled(Container)<{ theme: Theme }>`
  margin-top: ${({ theme }) => theme.mixins.toolbar.minHeight + 60}px;
  margin-bottom: 90px;
`;
export const Wrapper = styled.section<{ theme: Theme }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  min-height: 100vh;
`;