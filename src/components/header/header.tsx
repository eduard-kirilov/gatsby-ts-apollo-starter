/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import * as React from 'react';
import { IAllStringProps, IHeaderProps } from 'utils/interface';
import {
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
} from '@material-ui/core';

import {
  AccountCircle,
  MoreVert,
} from '@material-ui/icons';

import LogoLeft from 'images/logo-white.inline.svg';
import LogoRight from 'images/logo-right.inline.svg';

import {
  AppBarStyled,
  Link,
  LinkLogo,
  LogoLeftStyled,
  LogoRightStyled,
  LogoWrapper,
  NavItems,
  NavLeft,
  NavRight,
  Profile,
  ProfileEmail,
  SectionDesktop,
  SectionMobile,
  Toolbar,
  Wrapper,
} from './styles';

interface IProfileMenu {
  title: string;
  link?: string;
  action?: () => void;
}

export const Header: React.FC<IHeaderProps> = ({
  handleOpen,
  currentUser,
  logout,
  authorized,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const [
    mobileMoreAnchorEl,
    setMobileMoreAnchorEl,
  ] = React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleLogout = () => {
    logout();
    handleMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menu: IAllStringProps[] = [
    // {
    //   title: 'Блог',
    //   link: '/blog',
    // }
  ];

  const menuProfile: IProfileMenu[]  = [
    {
      title: 'Профиль',
      link: '/profile',
    }, {
      title: 'Настройки',
      link: '/settings',
    }, {
      title: 'Выйти',
      action: handleLogout,
    }
  ];

  const menuMobile: IProfileMenu[]  = [
    // {
    //   title: 'Блог',
    //   link: '/blog',
    // },
    ...menuProfile,
  ];

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {menuProfile.map((item) => item.link ? (
        <MenuItem href={item.link} key={item.title}>{item.title}</MenuItem>
      ) : (
        <MenuItem onClick={item.action} key={item.title}>{item.title}</MenuItem>
      ))}
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {menuMobile.map((item) => item.link ? (
        <MenuItem href={item.link} key={item.title}>{item.title}</MenuItem>
      ) : (
        <MenuItem onClick={item.action} key={item.title}>{item.title}</MenuItem>
      ))}
    </Menu>
  );
  return (
    <Wrapper>
      <AppBarStyled position="fixed">
        <Container maxWidth="lg">
          <Toolbar>
            <NavLeft>
              <LinkLogo to="/">
                <Button color="inherit">
                <LogoWrapper>
                  <LogoLeftStyled>
                    <LogoLeft />
                  </LogoLeftStyled>
                  <LogoRightStyled>
                    <LogoRight />
                  </LogoRightStyled>
                </LogoWrapper>
                </Button>
              </LinkLogo>
              <NavItems>
                {menu.map((item) => (
                  <Button key={item.title}>
                    <Link to={item.link}>{item.title}</Link>
                  </Button>
                ))}
              </NavItems>
            </NavLeft>
            {authorized ? (
              <NavRight>
                <SectionDesktop>
                  <Profile
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                  >
                    <Button
                      color="inherit"
                    >
                      <AccountCircle
                        color="inherit"
                      />
                      <ProfileEmail>
                        {currentUser && currentUser.email}
                      </ProfileEmail>
                    </Button>
                  </Profile>
                </SectionDesktop>
                <SectionMobile>
                  <IconButton
                    aria-label="show more"
                    aria-controls={mobileMenuId}
                    aria-haspopup="true"
                    onClick={handleMobileMenuOpen}
                    color="inherit"
                    size="small"
                  >
                    <MoreVert />
                  </IconButton>
                </SectionMobile>
              </NavRight>
            ) : (
              <NavRight>
                <Button
                  color="inherit"
                  aria-label="login"
                  name="login"
                  onClick={handleOpen}
                >
                  Войти
                </Button>
              </NavRight>
            )}
          </Toolbar>
        </Container>
      </AppBarStyled>
      {renderMobileMenu}
      {renderMenu}
    </Wrapper>
  );
};
