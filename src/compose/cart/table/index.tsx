/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import * as React from 'react';
import { useQuery, useMutation } from '@apollo/client';

import { PRODUCTS_QUERY } from 'gql/query';
import { DEL_PRODUCT_MUTATION } from 'gql/mutation';
import { TableCart } from 'components/table';
import { IProducts, IAllStringProps } from 'utils/interface';

interface IProps {
  currentSortId?: string;
  direction: string;
  handleOpen: (id: string) => void;
  page: number;
  rowsPerPage: number;
  handleResetPage: () => void;
  setCurrrentSortId: (a: IAllStringProps) => void;
  setDirection: (a: string) => void;
  setPage: (a: number) => void;
  setRowsPerPage: (a: number) => void;
}

export const TableCartCompose: React.FC<IProps> = ({
  direction,
  handleOpen,
  page,
  rowsPerPage,
  handleResetPage,
  setCurrrentSortId,
  setDirection,
  setPage,
  setRowsPerPage,
}) => {
  const { data, fetchMore } = useQuery<IProducts>(PRODUCTS_QUERY, {
    variables: {
      page_size: rowsPerPage,
      direction,
    },
  });
  const products = data && data.products ? data.products : {};

  const [delProduct] = useMutation(DEL_PRODUCT_MUTATION, {
    refetchQueries: [{ query: PRODUCTS_QUERY }],
    awaitRefetchQueries: true,
  });

  const handleLoadData = (variables: any) => {
    fetchMore({
      query: PRODUCTS_QUERY,
      variables,
      updateQuery: (prev: any, { fetchMoreResult }: any) => {
        if (!fetchMoreResult) return prev;
        return fetchMoreResult;
      },
    });
  };

  const handleChangeRowsPerPage = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    handleResetPage();
  };

  const handleChangePage = (_: unknown, newPage: number) => {
    const { first_id = null, last_id = null } = products;
    if (newPage > page) {
      handleLoadData({
        page_size: rowsPerPage,
        last_id,
        direction,
      });
      setCurrrentSortId({ last_id });
    } else {
      handleLoadData({
        page_size: rowsPerPage,
        first_id,
        direction,
      });
      setCurrrentSortId({ first_id });
    }
    setPage(newPage);
  };

  const handleDelProduct = (_id: string) => {
    delProduct({ variables: { _id } });
  };

  const toggleDirection = () => {
    direction === 'ASC' ? setDirection('DESC') : setDirection('ASC');
  };
  return (
    <TableCart
      direction={direction.toLowerCase()}
      handleChangePage={handleChangePage}
      handleChangeRowsPerPage={handleChangeRowsPerPage}
      handleDelProduct={handleDelProduct}
      handleOpen={handleOpen}
      page={page}
      products={products}
      rowsPerPage={rowsPerPage}
      toggleDirection={toggleDirection}
    />
  );
};
