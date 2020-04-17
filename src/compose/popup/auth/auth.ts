/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import { connect } from 'react-redux';
import { PopupAuth } from 'components/popup';
import { actions, getstate } from 'ducks/ui';
import { login } from 'ducks/auth/actions';

const { closeModalLogin } = actions;
const { getModalLoginOpen } = getstate;

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = (dispatch: (fn: any) => void) => ({
  handleLogin: (userData: any) => {
    dispatch(login(userData));
    dispatch(closeModalLogin());
  },
});

export const PopupAuthCompose = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PopupAuth);