/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import { Theme, fade } from '@material-ui/core/styles';
import { createStyles } from '@material-ui/styles';
import { Link as LinkGatsby } from 'gatsby';
import styled from 'styled-components';

import LogoLeft from 'images/logo.inline.svg';
import LogoRighe from 'images/logo-right.inline.svg';

const drawerWidth = 240;

export const styles = (theme: Theme) =>
  createStyles({
    logoLink: {
      color: 'inherit',
      textDecoration: 'none',
      '&:focus, &:hover': {
        color: 'inherit',
        textDecoration: 'none',
      },
    },
    appBar: {
      backgroundColor: theme.palette.primary.light,
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    navItems: {
      marginLeft: 32,
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
      '& a': {
        color: theme.palette.common.white,
        textDecoration: 'none',
        '&:hover': {
          color: theme.palette.common.white,
          textDecoration: 'none',
        }
      },
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: 200,
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  });
export const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
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
export const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
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
