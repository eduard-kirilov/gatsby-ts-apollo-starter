/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import * as React from 'react';
import { useQuery, useMutation } from '@apollo/client';

import { PRODUCT_QUERY, PRODUCTS_QUERY } from 'gql/query';
import { UP_PRODUCT_MUTATION } from 'gql/mutation';

import { IAllStringProps } from 'utils/interface';

import { ModalWrapper } from './modal';
import { PopupUpProductWrapper } from './up-product';


interface IProps {
  currentSortId?: IAllStringProps;
  updateId: string;
  direction: string;
  rowsPerPage: number;
}
interface IQuery {
  product: IAllStringProps;
}

export const PopupUpProductCompose: React.FC<IProps> = ({
  currentSortId,
  updateId,
  direction,
  rowsPerPage,
}) => {
  if (updateId === '') return null;

  const { data, loading } = useQuery<IQuery>(PRODUCT_QUERY, {
    variables: { _id: updateId },
  });

  const [upProduct] = useMutation(UP_PRODUCT_MUTATION, {
    refetchQueries: [{
      query: PRODUCTS_QUERY,
      variables: {
        page_size: rowsPerPage,
        direction,
        ...currentSortId,
      }
    }],
    awaitRefetchQueries: true,
  });

  const handleUpProduct = (data: IAllStringProps) => {
    upProduct({
      variables: data,
    });
  };
  
  if (loading) return null;

  return (
    <ModalWrapper>
      <PopupUpProductWrapper
        product={data ? data.product : {}}
        handleUpProduct={handleUpProduct}
      />
    </ModalWrapper>
  );
};
