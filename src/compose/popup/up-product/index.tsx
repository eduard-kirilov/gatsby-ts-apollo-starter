/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import * as React from 'react';
import { useQuery, useMutation } from '@apollo/client';

import { IAllStringProps } from 'utils/interface';
import { Modal } from 'components/modal';
import { PopupUpProduct } from 'components/popup';
import { PRODUCT_QUERY, PRODUCTS_QUERY } from 'gql/query';
import { UP_PRODUCT_MUTATION } from 'gql/mutation';

interface IProps {
  currentSortId?: IAllStringProps;
  currrentId: string;
  direction: string;
  handleClose: () => void;
  open: boolean;
  rowsPerPage: number;
}
interface IQuery {
  product: IAllStringProps;
}

export const PopupUpProductCompose: React.FC<IProps> = ({
  currentSortId,
  currrentId,
  direction,
  handleClose,
  open,
  rowsPerPage,
}) => {
  if (currrentId === '') return null;

  const { data, loading } = useQuery<IQuery>(PRODUCT_QUERY, {
    variables: { _id: currrentId },
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
    <Modal open={open} handleClose={handleClose}>
      <PopupUpProduct
        product={data ? data.product : {}}
        handleUpProduct={handleUpProduct}
        handleClose={handleClose}
      />
    </Modal>
  );
};
