/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import { Theme } from '@material-ui/core/styles';
import { Link as LinkGatsby } from 'gatsby';
import styled, { css } from 'styled-components';

import { AppBar } from '@material-ui/core';

import LogoLeft from 'images/logo.inline.svg';
import LogoRighe from 'images/logo-right.inline.svg';


export const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
`;
export const AppBarStyled = styled(AppBar)<{ theme: Theme }>`
  ${({ theme }) => css`
    background-color: ${theme.palette.primary.light};
    z-index: ${theme.zIndex.drawer + 1};
    transition: ${theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    })};
  `}
`;
export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
export const LogoLeftStyled = styled<any>(LogoLeft)`
  max-width: 40px;
  max-height: 40px;
  flex-grow: 1;
`;
export const LogoRightStyled = styled<any>(LogoRighe)`
  max-width: 70px;
  height: auto;
  flex-grow: 1;
  margin-left: 5px;
`;
export const NavItems = styled.nav<{ theme: Theme }>`
  margin-left: 32px;
  @media(max-width: ${({ theme }) => theme.breakpoints.values.md}px){
    display: none;
  }
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
  color: ${({ theme }) => theme.palette.primary.main};
  text-decoration: none;
  font-weight: 400;
  &:hover {
    color: ${({ theme }) => theme.palette.primary.main};
    text-decoration: none;
  }
`;
export const LinkLogo = styled(LinkGatsby)<{ theme: Theme }>`
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`;
export const ProfileEmail = styled.div`
  margin-left: 15px;
  color: ${({ theme }) => theme.palette.primary.main};
  
`;
export const Profile = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
`;
export const SectionMobile = styled.div<{ theme: Theme }>`
  display: flex;
  color: ${({ theme }) => theme.palette.primary.main};
  ${({ theme }) => css`${theme.breakpoints.up('md')} {
    display: none;
  }`}
`;
export const SectionDesktop = styled.div<{ theme: Theme }>`
  display: none;
  color: ${({ theme }) => theme.palette.primary.main};
  ${({ theme }) => css`${theme.breakpoints.up('md')} {
    display: flex;
  }`}
`;
