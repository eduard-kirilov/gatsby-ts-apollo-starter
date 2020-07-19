/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import React, { FC, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useQuery, useMutation } from '@apollo/client';

import { PRODUCT_QUERY, PRODUCTS_QUERY } from 'gql/query';
import { UP_PRODUCT_MUTATION } from 'gql/mutation';
import { IAllStringProps } from 'utils/interface';
import { actions, get } from 'stores/admin/table';
import { actions as modalActions, get as modalGet } from 'stores/modals';
import { PopupUpProduct } from 'components/popup';
import { Modal } from 'components/modal';

interface IQuery {
  product: IAllStringProps;
}

const { setUpdateId } = actions;
const { closeUpProduct } = modalActions;
const { getUpdateId, getPage, getPerPage, getDirection } = get;
const { getUpProductModalsStatus } = modalGet;

const PopupUpProductComposeMemo: FC = () => {
  const page = useSelector(getPage);
  const perPage = useSelector(getPerPage);
  const updateId = useSelector(getUpdateId);
  const direction = useSelector(getDirection);
  const open = useSelector(getUpProductModalsStatus);
  const dispatch = useDispatch();

  const { data, loading } = useQuery<IQuery>(PRODUCT_QUERY, {
    variables: { _id: updateId },
  });

  const [upProduct] = useMutation(UP_PRODUCT_MUTATION, {
    refetchQueries: [{
      query: PRODUCTS_QUERY,
      variables: {
        page: page,
        per_page: perPage,
        direction,
      }
    }],
    awaitRefetchQueries: true,
  });

  const handleUpProduct = (data: IAllStringProps) => {
    upProduct({
      variables: data,
    });
  };

  const handleClose = () => {
    dispatch(closeUpProduct());
    dispatch(setUpdateId(''));
  };
  
  if (loading) return null;
  if (!data || !data.product) return null;
  return (
    <Modal
      open={open}
      handleClose={handleClose}
    >
      <PopupUpProduct
        product={data.product}
        handleClose={handleClose}
        handleUpProduct={handleUpProduct}
      />
    </Modal>
  );
};

export const PopupUpProductCompose = memo(PopupUpProductComposeMemo);