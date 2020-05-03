/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import styled from 'styled-components';
// import { Theme } from '@material-ui/core/styles';
import { Title4 } from 'components/typography';
import { Table } from '@material-ui/core';

export const TableStyled = styled(Table)`
  min-width: 750px;
`;

export const Title = styled(Title4)`
  margin-bottom: 40px;
`;
