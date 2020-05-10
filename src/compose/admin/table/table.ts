/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import { connect } from 'react-redux';
import { TableProducts } from 'components/table';
import { actions } from 'stores/modals';
import { actions as adminActions } from 'stores/admin/table';

const { openUpProduct } = actions;
const { setUpdateId } = adminActions;

const mapDispatchToProps = (dispatch: (fn: any) => void) => ({
  handleOpen: (_id: string) => {
    dispatch(setUpdateId(_id));
    dispatch(openUpProduct());
  },
});

export const TableProductsWrapper = connect(
  null,
  mapDispatchToProps,
)(TableProducts);
