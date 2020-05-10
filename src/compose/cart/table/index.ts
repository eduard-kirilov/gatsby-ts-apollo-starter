/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import { connect } from 'react-redux';
import { TableCartCompose as TableCart } from './table-compose';
import { actions } from 'stores/cart/table';
import { get as selectefGet } from 'stores/cart/selected';

const { getCartSelectedIds } = selectefGet;
const { setSortId } = actions;

const mapStateToProps = (state: any) => ({
  ids: getCartSelectedIds(state),
});

const mapDispatchToProps = (dispatch: (fn: any) => void) => ({
  setSortId: (id: string) => setSortId(id),
});

export const TableCartCompose = connect<{}, any>(
  mapStateToProps,
  mapDispatchToProps,
)(TableCart);