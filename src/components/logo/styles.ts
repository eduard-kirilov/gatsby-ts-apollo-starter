/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import styled, { css } from 'styled-components';
import { Theme } from '@material-ui/core/styles';
import { Link as LinkGatsby } from 'gatsby';

export const LogoWrapper = styled.div<{ theme: Theme }>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  &:hover, &:focus {
    background-color: ${({ theme }) => theme.palette.action.white};
  }
`;
export const LogoLeftStyled = styled.div`
  color: ${({ theme }) => theme.palette.primary.contrastText};
  display: flex;
  svg {
    max-width: 25px;
    max-height: 25px;
    flex-grow: 1;
  }
`;
export const LogoRightStyled = styled.div<{ theme: Theme }>`
  color: ${({ theme }) => theme.palette.primary.contrastText};
  display: none;
  margin-left: 8px;
  svg {
    max-width: 70px;
    height: auto;
    flex-grow: 1;
  }
  ${({ theme }) => css`${theme.breakpoints.up('sm')} {
    display: flex;
  }`}
`;
export const LinkLogo = styled(LinkGatsby)<{ theme: Theme }>`
  text-decoration: none;
  color: ${({ theme }) => theme.palette.primary.contrastText};
  button {
    min-width: 0;
  }
  &:hover {
    text-decoration: none;
    color: ${({ theme }) => theme.palette.primary.contrastText};
  }
`;
