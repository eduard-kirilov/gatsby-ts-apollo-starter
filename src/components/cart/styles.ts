/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import styled from 'styled-components';
import { ListItemText } from '@mui/material';
import { Title5 } from 'components/typography';

export const Title = styled(Title5)`
  margin-bottom: 40px;
`;
export const ListItemTextStyled = styled(ListItemText)`
  &.MuiListItemText-root {
    margin: 0;
  }
`;
