/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import { connect } from 'react-redux';
import { PopupAddProduct } from 'components/popup';
import { actions } from 'stores/modals';

const { closeAddProduct } = actions;

const mapDispatchToProps = (dispatch: (fn: any) => void) => ({
  handleClose: () => dispatch(closeAddProduct()),
});

export const PopupAddProductWrapper = connect(
  null,
  mapDispatchToProps,
)(PopupAddProduct);
