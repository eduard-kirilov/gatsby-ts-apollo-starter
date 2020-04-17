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
  title: string;
}

const searchProduct = graphql(productsQuery, {
  options: ({
    title = '',
  }: ISearchProduct) => ({
    variables: { title },
  }),
});

export const ContentCompose = compose(searchProduct)(Content);