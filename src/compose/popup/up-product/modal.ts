/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import { connect } from 'react-redux';
import { Modal } from 'components/modal';
import { actions, get } from 'stores/modals';
import { actions as adminActions } from 'stores/admin/table';

const { closeUpProduct } = actions;
const { setUpdateId } = adminActions;
const { getUpProductModalsStatus } = get;

const mapStateToProps = (state: any) => ({
  open: getUpProductModalsStatus(state),
});

const mapDispatchToProps = (dispatch: (fn: any) => void) => ({
  handleClose: () => {
    dispatch(closeUpProduct());
    dispatch(setUpdateId(''));
  },
});

export const ModalWrapper = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal);