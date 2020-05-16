/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import * as React from 'react';
import {
  Badge,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
} from '@material-ui/core';

import { AccountCircle, MoreVert, ShoppingCart } from '@material-ui/icons';
import { IAllStringProps } from 'utils/interface';
import LogoLeft from 'images/logo-white.inline.svg';
import LogoRight from 'images/logo-right.inline.svg';
import { LinkClearStyles } from 'components/link';

import {
  AppBarStyled,
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

interface IHeaderProps {
  authorized: boolean;
  currentUser: IAllStringProps;
  handleOpen?: () => void;
  logout?: () => void;
  language?: string;
  productIds?: string[],
  setLanguage?: (type: string) => void;
}
interface IProfileMenu {
  title: string;
  link?: string;
  action?: () => void;
}

const HeaderMemo: React.FC<IHeaderProps> = ({
  productIds = [],
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

  const handleLogout = () => {
    logout();
    handleMenuClose();
  };

  const menu: IProfileMenu[] = [
    // {
    //   title: 'Profile',
    //   link: '/profile',
    // },
    {
      title: 'Admin',
      link: '/admin',
    },
    {
      title: 'Logout',
      action: handleLogout,
    },
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
      {menu.map(item =>
        item.link ? (
          <MenuItem key={item.title}>
            <LinkClearStyles to={item.link}>
              {item.title}
            </LinkClearStyles>
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
          <MenuItem key={item.title}>
            <LinkClearStyles to={item.link}>
              {item.title}
            </LinkClearStyles>
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
                  <Link to="/cart">
                    <IconButton aria-label="show 4 new mails" color="inherit">
                      <Badge badgeContent={productIds.length} color="secondary">
                        <ShoppingCart fontSize="small" />
                      </Badge>
                    </IconButton>
                  </Link>
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
                  Login
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

export const Header = React.memo(HeaderMemo);
