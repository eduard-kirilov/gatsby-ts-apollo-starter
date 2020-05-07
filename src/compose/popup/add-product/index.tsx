/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import * as React from 'react';
import { useMutation } from '@apollo/client';

import { PRODUCTS_QUERY } from 'gql/query';
import { ADD_PRODUCT_MUTATION } from 'gql/mutation';
import { PopupAddProduct } from 'components/popup';
import { Modal } from 'components/modal';

interface IProps {
  open: boolean;
  handleClose: () => void;
}

export const PopupAddProductCompose: React.FC<IProps> = ({
  open,
  handleClose,
}) => {
  const [addProduct] = useMutation(
    ADD_PRODUCT_MUTATION,
    {
      update: (cache) => cache.writeQuery({
        query: PRODUCTS_QUERY,
        data: null,
      }),
    }
  );

  const handleaddProduct = (data: IAllStringProps) => {
    addProduct({ variables: data })
  }

  return (
    <Modal
      open={open}
      handleClose={handleClose}
    >
      <PopupAddProduct
        handleaddProduct={handleaddProduct}
        handleClose={handleClose}
      />
    </Modal>
  )
}