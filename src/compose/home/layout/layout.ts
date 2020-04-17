/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import { connect } from 'react-redux';
import { Layout } from 'components/layout'
import { actions } from 'ducks/ui';

const { openModalLogin } = actions;

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = (dispatch: any) => ({
  handleOpen: () => dispatch(openModalLogin()),
});

export const LayoutCompose = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Layout)