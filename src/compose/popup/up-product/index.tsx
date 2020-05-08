/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import * as React from 'react';
import { useQuery, useMutation } from '@apollo/client';

import { IAllStringProps, IProduct } from 'utils/interface';
import { Modal } from 'components/modal';
import { PopupUpProduct } from 'components/popup';
import { PRODUCT_QUERY, PRODUCTS_QUERY } from 'gql/query';
import { UP_PRODUCT_MUTATION } from 'gql/mutation';

interface IProps {
  open: boolean;
  currrentId: string;
  handleClose: () => void;
}
interface IQuery {
  product: IAllStringProps;
}

export const PopupUpProductCompose: React.FC<IProps> = ({
  open,
  currrentId,
  handleClose,
}) => {
  if (currrentId === '') return null;
  const { data, loading } = useQuery<IQuery>(PRODUCT_QUERY, {
    variables: { _id: currrentId },
  });
  PRODUCT_QUERY;
  const [upProduct] = useMutation(UP_PRODUCT_MUTATION, {
    update: cache =>
      cache.writeQuery({
        query: PRODUCTS_QUERY,
        data: null,
      }),
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
