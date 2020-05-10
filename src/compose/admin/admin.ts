/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import { connect } from 'react-redux';
import { Admin } from 'components/admin';
import { actions } from 'stores/modals';

const { openAddProduct } = actions;

const mapDispatchToProps = (dispatch: (fn: any) => void) => ({
  handleOpen: () => dispatch(openAddProduct()),
});

export const AdminWrapper = connect(
  null,
  mapDispatchToProps,
)(Admin);
