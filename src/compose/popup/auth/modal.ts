/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import { connect } from 'react-redux';
import { Modal } from 'components/modal';
import { actions, get } from 'stores/modals';

const { closeLogin } = actions;
const { getLoginModalsStatus } = get;

const mapStateToProps = (state: any) => ({
  open: getLoginModalsStatus(state),
});

const mapDispatchToProps = (dispatch: (fn: any) => void) => ({
  handleClose: () => dispatch(closeLogin()),
});

export const ModalWrapper = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal);