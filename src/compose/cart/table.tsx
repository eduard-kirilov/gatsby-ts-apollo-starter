/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import React, { FC, memo } from 'react';
import { useSelector } from 'react-redux';
import { useQuery } from '@apollo/client';

import { PRODUCTS_QUERY } from 'gql/query';
import { get } from 'stores/admin/table';
import { get as selectefGet } from 'stores/cart/selected';
import { TableCart } from 'components/table';
import { IProducts } from 'utils/interface';

import { ButtonSet } from './button-set';

const { getPerPage, getDirection } = get;
const { getCartSelectedIds } = selectefGet;

const TableCartComposeMemo: FC = () => {
  const ids = useSelector(getCartSelectedIds);
  const perPage = useSelector(getPerPage);
  const direction = useSelector(getDirection);

  const { data, fetchMore, loading } = useQuery<IProducts>(PRODUCTS_QUERY, {
    variables: {
      ids,
      per_page: perPage,
      direction,
    },
  });

  const handleResetData = () => {
    fetchMore({
      query: PRODUCTS_QUERY,
      variables: {
        ids: [],
        per_page: 0,
        direction,
      },
      updateQuery: (prev: any, { fetchMoreResult }: any) => {
        if (!fetchMoreResult) return prev;
        return fetchMoreResult;
      },
    });
  };

  const products = data && data.products ? data.products : {};

  return (
    <>
      <TableCart
        loading={loading}
        products={products}
      />
      <ButtonSet
        handleResetData={handleResetData}
      />
    </>
  );
};

export const TableCartCompose = memo(TableCartComposeMemo);
