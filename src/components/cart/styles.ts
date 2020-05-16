/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import styled from 'styled-components';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { ListItemText } from '@material-ui/core';
import { Title5 } from 'components/typography';

export const Title = styled(Title5)`
  margin-bottom: 40px;
`;
export const ListItemTextStyled = styled(ListItemText)`
  &.MuiListItemText-root {
    margin: 0;
  }
`;
// export const ButtonSetWrapper = styled(Title5)`
//   margin-top: 40px;
//   display: flex;
//   flex-direction:
// `;