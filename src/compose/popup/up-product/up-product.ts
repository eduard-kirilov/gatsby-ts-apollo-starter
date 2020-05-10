/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import { connect } from 'react-redux';
import { PopupUpProduct } from 'components/popup';
import { actions } from 'stores/modals';
import { actions as adminActions } from 'stores/admin/table';

const { closeUpProduct } = actions;
const { setUpdateId } = adminActions;

const mapDispatchToProps = (dispatch: (fn: any) => void) => ({
  handleClose: () => {
    dispatch(closeUpProduct());
    dispatch(setUpdateId(''));
  },
});

export const PopupUpProductWrapper = connect(
  null,
  mapDispatchToProps,
)(PopupUpProduct);
