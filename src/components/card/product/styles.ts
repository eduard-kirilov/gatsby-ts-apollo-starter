/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import styled from 'styled-components';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { createStyles } from '@material-ui/styles';
import { Title5, TextDefault } from 'components/typography';

import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from '@material-ui/core';

export const CardStyled = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export const CardMediaStyled = styled(CardMedia)`
  padding-top: 56.25%;
`;
export const CardContentStyled = styled(CardContent)`
  flex-grow: 1;
`;
export const CardActionsStyled = styled(CardActions)`
  padding: ${({ theme }) => theme.spacing(2)}px !important;
  display: flex;
  justify-content: flex-end;
`;
export const Title = styled(Title5)`
  margin-bottom: ${({ theme }) => theme.spacing(2)}px;
`;
export const Subtitle = styled(TextDefault)`
  margin-bottom: ${({ theme }) => theme.spacing(2)}px;
`;
