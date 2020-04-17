/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import { connect } from 'react-redux';
import { Modal } from 'components/modal';
import { actions, getstate } from 'ducks/ui';

const { closeModalLogin } = actions;
const { getModalLoginOpen } = getstate;

const mapStateToProps = (state: any) => ({
  open: getModalLoginOpen(state),
});

const mapDispatchToProps = (dispatch: (fn: any) => void) => ({
  handleClose: () => dispatch(closeModalLogin()),
});

export const ModalCompose = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal);