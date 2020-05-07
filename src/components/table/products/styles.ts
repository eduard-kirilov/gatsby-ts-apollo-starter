/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import styled from 'styled-components';
import { Theme } from '@material-ui/core/styles';
import { Table } from '@material-ui/core';

export const TableStyled = styled(Table)`
  min-width: 750px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .MuiIconButton-label {
    opacity: 0.6;
    &:hover, &:focus {
      opacity: 1;
    }
  }
  .MuiIconButton-root:last-child {
    margin-left: 16px;
  }
`;
