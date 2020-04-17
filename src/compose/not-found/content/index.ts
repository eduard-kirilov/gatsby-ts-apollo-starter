/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import { compose } from 'recompose';
import { graphql } from 'react-apollo';

import { productsQuery } from 'shema/query';
import { Content } from 'components/content';

interface ISearchProduct {
  name: string;
  payType: string;
  isFavorite: boolean;
}

const searchProduct = graphql(productsQuery, {
  options: ({
    name = '',
    payType = '',
    isFavorite = false,
  }: ISearchProduct) => ({
    variables: { name, payType, isFavorite },
  }),
});

export const ContentCompose = compose(searchProduct)(Content);