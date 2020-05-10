/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import { connect } from 'react-redux';
import { Header } from 'components/header';
import { actions } from 'stores/modals';
import { get as getSelected } from 'stores/cart/selected';

const { openLogin } = actions;
const { getCartSelectedIds } = getSelected;

const mapStateToProps = (state: any) => ({
  productIds: getCartSelectedIds(state),
});

const mapDispatchToProps = (dispatch: (fn: any) => void) => ({
  handleOpen: () => dispatch(openLogin()),
});

export const HeaderWrapper = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
