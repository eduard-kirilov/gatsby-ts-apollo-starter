/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import * as React from 'react';
import { Link as LinkG } from 'gatsby';
import { IClasses, IAllStringProps } from 'utils/interface';
import {
  AppBar,
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

import {
  LogoWrapper,
  NavItems,
  Wrapper,
  NavRight,
  NavLeft,
  Toolbar,
  Link,
  LinkLogo,
  LogoLeftStyled,
  LogoRightStyled,
  ProfileEmail,
  Profile,
} from './styles';

interface IProps {
  authorized: boolean;
  currentUser: IAllStringProps;
  handleOpen?: () => void;
  logout?: () => void;
}

interface IProfileMenu {
  title: string;
  link?: string;
  action?: () => void;
}

export const Header: React.FC<IProps & IClasses> = ({
  classes,
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

  const menu: IAllStringProps[] = [
    {
      title: 'Магазин',
      link: '/shop',
    }
  ];
  
  const menuProfile: IProfileMenu[]  = [
    {
      title: 'Профиль',
      link: '/profile',
    }, {
      title: 'Настройки',
      link: '/settings',
    },  {
      title: 'Выйти',
      action: () => handleLogout,
    }
  ];

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
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <div>Профиль</div>
      </MenuItem>
    </Menu>
  );
  return (
    <Wrapper>
      <AppBar position="fixed" className={classes.appBar}>
        <Container maxWidth="lg">
          <Toolbar>
            <NavLeft>
              <LinkLogo to="/">
                <LogoWrapper>
                  <LogoLeftStyled />
                  <LogoRightStyled />
                </LogoWrapper>
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
                <div className={classes.grow} />
                <div className={classes.sectionDesktop}>
                  <Profile
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                  >
                    <Button>
                      <AccountCircle />
                      <ProfileEmail>
                        {currentUser && currentUser.email}
                      </ProfileEmail>
                    </Button>
                  </Profile>
                </div>
                <div className={classes.sectionMobile}>
                  <IconButton
                    aria-label="show more"
                    aria-controls={mobileMenuId}
                    aria-haspopup="true"
                    onClick={handleMobileMenuOpen}
                    color="inherit"
                  >
                    <MoreVert />
                  </IconButton>
                </div>
              </NavRight>
            ) : (
              <NavRight>
                <Button color="inherit" onClick={handleOpen}>
                  Войти
                </Button>
              </NavRight>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Wrapper>
  );
};
