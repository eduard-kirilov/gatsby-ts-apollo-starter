/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import { connect } from 'react-redux';
import { Home } from 'components/home';
import { addToCart } from 'stores/cart/selected/actions';

const mapDispatchToProps = (dispatch: (fn: any) => void) => ({
  addToCard: (id: string) => dispatch(addToCart(id)),
});

export const HomeWrapper = connect(
  null,
  mapDispatchToProps,
)(Home);
