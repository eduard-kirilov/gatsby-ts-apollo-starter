/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import { connect } from 'react-redux';
import { Initialization } from 'components/initialization';
import { initCartSelected } from 'stores/cart/selected/actions';

const mapDispatchToProps = (dispatch: (fn: any) => void) => ({
  handleMount: () => {
    dispatch(initCartSelected());
  },
});

export const InitializationWrapper = connect(
  null,
  mapDispatchToProps,
)(Initialization);
