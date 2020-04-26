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
  Badge,
  Button,
  Container,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@material-ui/core';

import {
  Search,
  AccountCircle,
  Mail,
  Notifications,
  MoreVert,
} from '@material-ui/icons';

interface IProps {
  authorized: boolean;
  currentUser: IAllStringProps;
  handleOpen?: () => void;
  logout?: () => void;
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
      <MenuItem onClick={handleMenuClose}>Профиль</MenuItem>
      <MenuItem onClick={handleMenuClose}>Настройки</MenuItem>
      <MenuItem onClick={handleMenuClose}>Администрирование</MenuItem>
      <MenuItem onClick={handleLogout}>Выйти</MenuItem>
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
        <div>{currentUser && currentUser.email}</div>
      </MenuItem>
    </Menu>
  );
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Container maxWidth="lg">
          <Toolbar disableGutters={true}>
            <Typography className={classes.title} variant="h6" noWrap>
              <LinkG to="/">Material-UI</LinkG>
            </Typography>
            <nav className={classes.navItems}>
              <Button className={classes.buttonLink}>
                <LinkG to="/shop">Магазин</LinkG>
              </Button>
            </nav>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <Search />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            {authorized && (
              <>
                <div className={classes.grow} />
                <div className={classes.sectionDesktop}>
                  <div
                    className={classes.profile}
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                  >
                    <IconButton edge="end" color="inherit">
                      <AccountCircle />
                    </IconButton>
                    <div className={classes.profileEmail}>
                      {currentUser && currentUser.email}
                    </div>
                  </div>
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
              </>
            )}
            {!authorized && (
              <Button color="inherit" onClick={handleOpen}>
                Войти
              </Button>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
};
