/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import React, { FC, ChangeEvent, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useQuery, useMutation } from '@apollo/client';

import { PRODUCTS_QUERY } from 'gql/query';
import { DEL_PRODUCT_MUTATION } from 'gql/mutation';
import { TableProducts } from 'components/table';
import { IProducts } from 'utils/interface';
import { actions } from 'stores/modals';
import { actions as adminActions, get as adminGet } from 'stores/admin/table';

const { openUpProduct } = actions;
const { setPage, setPerPage, setUpdateId, setDirection } = adminActions;
const { getPage, getPerPage, getDirection } = adminGet;

const TableProductsComposeMemo: FC = () => {
  const page = useSelector(getPage);
  const perPage = useSelector(getPerPage);
  const direction = useSelector(getDirection);
  const dispatch = useDispatch();

  const { data, fetchMore, loading } = useQuery<IProducts>(PRODUCTS_QUERY, {
    variables: {
      page: page,
      per_page: perPage,
      direction,
    },
  });

  const [delProduct] = useMutation(DEL_PRODUCT_MUTATION, {
    refetchQueries: [{
      query: PRODUCTS_QUERY,
      variables: {
        page: page,
        per_page: perPage,
        direction,
      },
    }],
    awaitRefetchQueries: true,
  });

  const handleLoadData = (newPage: number) => {
    fetchMore({
      query: PRODUCTS_QUERY,
      variables: {
        page: newPage,
        per_page: perPage,
        direction,
      },
      updateQuery: (prev: any, { fetchMoreResult }: any) => {
        if (!fetchMoreResult) return prev;
        return fetchMoreResult;
      },
    });
  };

  const handleChangeRowsPerPage = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    dispatch(setPerPage(parseInt(e.target.value, 10)));
    dispatch(setPage(0));
  };

  const handleChangePage = (_: unknown, newPage: number) => {
    handleLoadData(newPage);
    dispatch(setPage(newPage));
  };

  const handleDelProduct = (_id: string) => {
    delProduct({ variables: { _id } });
  };

  const toggleDirection = () => {
    direction === 'ASC'
      ? dispatch(setDirection('DESC'))
      : dispatch(setDirection('ASC'));
  };

  const handleOpen = async (_id: string) => {
    await dispatch(setUpdateId(_id));
    dispatch(openUpProduct());
  };

  const products = data && data.products ? data.products : {};

  return (
    <TableProducts
      page={page}
      loading={loading}
      perPage={perPage}
      direction={direction.toLowerCase()}
      handleChangePage={handleChangePage}
      handleChangeRowsPerPage={handleChangeRowsPerPage}
      handleDelProduct={handleDelProduct}
      products={products}
      handleOpen={handleOpen}
      toggleDirection={toggleDirection}
    />
  );
};

export const TableProductsCompose = memo(TableProductsComposeMemo);
