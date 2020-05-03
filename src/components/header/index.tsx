/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import * as React from 'react';
import { IAllStringProps, IHeaderProps } from 'utils/interface';
import {
  Badge,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
} from '@material-ui/core';

import { AccountCircle, MoreVert, ShoppingCart, ExpandMore } from '@material-ui/icons';
import { getContent } from 'content'
import LogoLeft from 'images/logo-white.inline.svg';
import LogoRight from 'images/logo-right.inline.svg';

import {
  AppBarStyled,
  Language,
  ButtonLanguage,
  Link,
  LinkLogo,
  LogoLeftStyled,
  LogoRightStyled,
  LogoWrapper,
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
  productIds = [],
  language,
  setLanguage,
  handleOpen,
  currentUser,
  logout,
  authorized,
}) => {
  const contents = getContent(language);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const [
    mobileMoreAnchorEl,
    setMobileMoreAnchorEl,
  ] = React.useState<null | HTMLElement>(null);

  const [languageMenuE1, setLanguageMenuE1] = React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const islanguageMenuOpen = Boolean(languageMenuE1);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleLanguageMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setLanguageMenuE1(event.currentTarget);
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

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

  const handleLanguageMenuClose = () => {
    setLanguageMenuE1(null);
  };

  const handleLanguageChange = (key: string) => {
    setLanguage(key)
    handleLanguageMenuClose();
  };

  const handleLogout = () => {
    logout();
    handleMenuClose();
  };

  const languageKey: IAllStringProps = {
    ru: 'Русский',
    en: 'English'
  }
  const languageList: IAllStringProps[] = [
    {
      title: 'Русский',
      key: 'ru',
    }, {
      title: 'English',
      key: 'en',
    },
  ]

  const menu: IProfileMenu[] = [
    {
      title: contents.menu.regular.profile,
      link: '/profile',
    },
    {
      title: contents.menu.regular.settings,
      link: '/settings',
    },
    {
      title: contents.menu.regular.logout,
      action: handleLogout,
    },
  ];

  const languagemenuId = 'language-menu';
  const languageMenu = (
    <Menu
      anchorEl={languageMenuE1}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={languagemenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={islanguageMenuOpen}
      onClose={handleLanguageMenuClose}
    >
      {languageList.map(item => (
        <MenuItem onClick={() => handleLanguageChange(item.key)} key={item.title}>
          {item.title}
        </MenuItem>
      ))}
    </Menu>
  );
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
      {menu.map(item =>
        item.link ? (
          <MenuItem href={item.link} key={item.title}>
            {item.title}
          </MenuItem>
        ) : (
          <MenuItem onClick={item.action} key={item.title}>
            {item.title}
          </MenuItem>
        ),
      )}
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
      {menu.map(item =>
        item.link ? (
          <MenuItem href={item.link} key={item.title}>
            {item.title}
          </MenuItem>
        ) : (
          <MenuItem onClick={item.action} key={item.title}>
            {item.title}
          </MenuItem>
        ),
      )}
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
            </NavLeft>
            {authorized ? (
              <NavRight>
                <SectionDesktop>
                  {productIds.length > 0 && (
                    <Link to="/cart">
                      <IconButton
                        aria-label="show 4 new mails"
                        color="inherit"
                      >
                        <Badge badgeContent={productIds.length} color="secondary">
                          <ShoppingCart fontSize="small" />
                        </Badge>
                      </IconButton>
                    </Link>
                  )}
                  <ButtonLanguage 
                    color="inherit"
                    aria-controls={languagemenuId}
                    onClick={handleLanguageMenuOpen}
                  >
                    <Language>
                      {languageKey[language]}
                    </Language>
                    <ExpandMore color="inherit" />
                  </ButtonLanguage>
                  <Profile
                    tabIndex={0}
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                  >
                    <Button color="inherit">
                      <AccountCircle color="inherit" />
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
      {languageMenu}
    </Wrapper>
  );
};
