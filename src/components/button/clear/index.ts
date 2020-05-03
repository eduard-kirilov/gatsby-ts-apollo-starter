/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import styled from 'styled-components';
import { Theme } from '@material-ui/core/styles';

export const ButtonClearStyles = styled.button<{ theme: Theme }>`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
  font-size: ${({ theme }) => theme.typography.fontSize};
  outline: none;
  border: none;
  background-color: transparent;
  padding: 0;
  margin: 0;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed,
  }
`;