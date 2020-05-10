/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import { connect } from 'react-redux';
import { PopupAuth } from 'components/popup';
import { actions } from 'stores/modals';

const { closeLogin } = actions;

const mapDispatchToProps = (dispatch: (fn: any) => void) => ({
  handleClose: () => dispatch(closeLogin()),
});

export const PopupAuthWrapper = connect(null, mapDispatchToProps)(PopupAuth);