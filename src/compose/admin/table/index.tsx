/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import * as React from 'react';
import { useQuery, useMutation } from '@apollo/client';

import { PRODUCTS_QUERY } from 'gql/query';
import { DEL_PRODUCT_MUTATION } from 'gql/mutation';
import { TableProducts } from 'components/table';
import { LinearProgressStyled } from 'components/status';
import { IProducts, IAllStringProps } from 'utils/interface';

interface IProps {
  handleOpen: (id: string) => void;
}

export const TableProductsCompose: React.FC<IProps> = ({
  handleOpen,
}) => {
  const { data, loading } = useQuery<IProducts>(PRODUCTS_QUERY, {
    variables: { title: '' },
  });

  const [delProduct] = useMutation(
    DEL_PRODUCT_MUTATION,
    {
      update: (cache) => cache.writeQuery({
        query: PRODUCTS_QUERY,
        data: null,
      }),
    }
  );

  const handleDelProduct = (_id: string) => {
    delProduct({ variables: { _id } })
  }

  if (loading) return <LinearProgressStyled />;
  return <TableProducts
    handleOpen={handleOpen}
    products={data ? data.products : []}
    handleDelProduct={handleDelProduct}
  />;
};
