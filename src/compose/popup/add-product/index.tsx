/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import * as React from 'react';
import { useMutation } from '@apollo/client';

import { PRODUCTS_QUERY } from 'gql/query';
import { ADD_PRODUCT_MUTATION } from 'gql/mutation';

import { IAllStringProps } from 'utils/interface';

import { PopupAddProductWrapper } from './add-product';
import { ModalWrapper } from './modal';

interface IProps {
  direction: string;
  handleResetPage: () => void;
  rowsPerPage: number;
}

export const PopupAddProductCompose: React.FC<IProps> = ({
  direction,
  handleResetPage,
  rowsPerPage,
}) => {
  const [addProduct] = useMutation(ADD_PRODUCT_MUTATION, {
    refetchQueries: [{
      query: PRODUCTS_QUERY,
      variables: {
        page_size: rowsPerPage,
        direction,
      }
    }],
    awaitRefetchQueries: true,
  });

  const handleaddProduct = (data: IAllStringProps) => {
    addProduct({ variables: data });
    handleResetPage();
  }

  return (
    <ModalWrapper>
      <PopupAddProductWrapper handleaddProduct={handleaddProduct} />
    </ModalWrapper>
  )
}