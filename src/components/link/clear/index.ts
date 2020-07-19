/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import styled from 'styled-components';
import { Theme } from '@material-ui/core/styles';
import { Link } from 'gatsby';

export const LinkClearStyles = styled(Link)<{ theme: Theme }>`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
  font-size: ${({ theme }) => theme.typography.fontSize};
  text-decoration: none;
  color: ${({ theme }) => theme.palette.common.black};
  &:hover {
    text-decoration: none;
    color: ${({ theme }) => theme.palette.common.black};
  }
`;
export const LinkAnyClearStyles = styled.a<{ theme: Theme }>`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
  font-size: ${({ theme }) => theme.typography.fontSize};
  text-decoration: none;
  color: ${({ theme }) => theme.palette.common.black};
  &:hover {
    text-decoration: none;
    color: ${({ theme }) => theme.palette.common.black};
  }
`;