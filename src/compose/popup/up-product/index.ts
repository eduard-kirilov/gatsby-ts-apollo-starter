/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import { connect } from 'react-redux';
import { PopupUpProductCompose as PopupUpProduct } from './up-products-compose';
import { get } from 'stores/admin/table';

const { getUpdateId } = get;

const mapStateToProps = (state: any) => ({
  updateId: getUpdateId(state),
});

export const PopupUpProductCompose = connect(
  mapStateToProps,
)(PopupUpProduct);