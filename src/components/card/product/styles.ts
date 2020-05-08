/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import styled from 'styled-components';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { Title5, TextDefault } from 'components/typography';

import {
  Card,
  CardMedia,
  CardContent,
} from '@material-ui/core';

export const CardStyled = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
  &.MuiPaper-elevation1 {
    transition: 0.2s ease-in;
    &:hover {
      box-shadow: ${({ theme }) => theme.shadows[4]};
    }
  }
`;
export const CardMediaStyled = styled(CardMedia)`
  padding-top: 56.25%;
  margin-top: 10px;
`;
export const CardContentStyled = styled(CardContent)`
  flex-grow: 1;
`;
export const CardFooter = styled.div<{ theme: Theme }>`
  padding: ${({ theme }) => theme.spacing(2)}px !important;
  display: flex;
  justify-content: space-between;
`;
export const Title = styled(Title5)<{ theme: Theme }>`
  margin-bottom: ${({ theme }) => theme.spacing(2)}px;
`;
export const Subtitle = styled(TextDefault)<{ theme: Theme }>`
  margin-bottom: ${({ theme }) => theme.spacing(2)}px;
`;
