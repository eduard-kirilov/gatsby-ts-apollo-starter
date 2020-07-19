/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import React, { FC, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useMutation } from '@apollo/client';

import { PRODUCTS_QUERY } from 'gql/query';
import { ADD_PRODUCT_MUTATION } from 'gql/mutation';
import { IAllStringProps } from 'utils/interface';
import { actions, get } from 'stores/admin/table';
import { actions as modalActions, get as modalGet } from 'stores/modals';
import { PopupAddProduct } from 'components/popup';
import { Modal } from 'components/modal';

const { setPage } = actions;
const { closeAddProduct } = modalActions;
const { getPerPage, getDirection } = get;
const { getAddProductModalsStatus } = modalGet;

const PopupAddProductComposeMemo: FC = () => {
  const perPage = useSelector(getPerPage);
  const direction = useSelector(getDirection);
  const open = useSelector(getAddProductModalsStatus);
  const dispatch = useDispatch();

  const [addProduct] = useMutation(ADD_PRODUCT_MUTATION, {
    refetchQueries: [
      {
        query: PRODUCTS_QUERY,
        variables: {
          page: 0,
          per_page: perPage,
          direction,
        },
      },
    ],
    awaitRefetchQueries: true,
  });

  const handleAddProduct = (data: IAllStringProps) => {
    addProduct({ variables: data });
    dispatch(setPage(0));
  };

  const handleClose = () => dispatch(closeAddProduct());

  return (
    <Modal
      open={open}
      handleClose={handleClose}
    >
      <PopupAddProduct
        handleAddProduct={handleAddProduct}
        handleClose={handleClose}
      />
    </Modal>
  );
};

export const PopupAddProductCompose = memo(PopupAddProductComposeMemo);
