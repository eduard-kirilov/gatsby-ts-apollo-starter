/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import styled, { css } from 'styled-components';
import { Theme } from '@material-ui/core/styles';
import { Link as LinkGatsby } from 'gatsby';

import { AppBar, Button } from '@material-ui/core';

export const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
`;
export const AppBarStyled = styled(AppBar)<{ theme: Theme }>`
  ${({ theme }) => `
    background-color: ${theme.palette.primary.light};
    z-index: ${theme.zIndex.drawer + 1};
    transition: ${theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    })};
  `}
`;
export const LogoWrapper = styled.div<{ theme: Theme }>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  &:hover, &:focus {
    background-color: ${({ theme }) => theme.palette.action.white};
  }
`;
export const LogoLeftStyled = styled.div`
  color: ${({ theme }) => theme.palette.common.white};
  display: flex;
  svg {
    max-width: 25px;
    max-height: 25px;
    flex-grow: 1;
  }
`;
export const LogoRightStyled = styled.div<{ theme: Theme }>`
  color: ${({ theme }) => theme.palette.common.white};
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
export const NavRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const NavLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const Toolbar = styled.div<{ theme: Theme }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({ theme }) => css`
    min-height: ${theme.mixins.toolbar.minHeight}px;
    ${theme.breakpoints.up('md')} {
      min-height: ${theme.mixins.toolbar.minHeight + 5}px;
    }
  `}
`;
export const Link = styled(LinkGatsby)<{ theme: Theme }>`
  color: ${({ theme }) => theme.palette.common.white};
  text-decoration: none;
  font-weight: 400;
  &:hover {
    color: ${({ theme }) => theme.palette.common.white};
    text-decoration: none;
  }
`;
export const LinkLogo = styled(LinkGatsby)<{ theme: Theme }>`
  text-decoration: none;
  color: ${({ theme }) => theme.palette.common.white};
  button {
    min-width: 0;
  }
  &:hover {
    text-decoration: none;
    color: ${({ theme }) => theme.palette.common.white};
  }
`;
export const ProfileEmail = styled.div`
  margin-left: 15px;
  color: ${({ theme }) => theme.palette.common.white};
  
`;
export const Profile = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.palette.common.white};
  margin-left: 16px;
`;
export const SectionMobile = styled.div<{ theme: Theme }>`
  display: flex;
  color: ${({ theme }) => theme.palette.common.white};    
  ${({ theme }) => css`${theme.breakpoints.up('md')} {
    display: none;
  }`}
`;
export const SectionDesktop = styled.div<{ theme: Theme }>`
  display: none;
  color: ${({ theme }) => theme.palette.common.white};
  ${({ theme }) => css`${theme.breakpoints.up('md')} {
    display: flex;
  }`}
`;
