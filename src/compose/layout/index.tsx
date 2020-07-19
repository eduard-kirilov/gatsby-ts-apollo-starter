/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import React, { FC, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useMutation } from '@apollo/client';

import { CURRENT_USER_QUERY } from 'gql/query';
import { LOGOUT_MUTATION } from 'gql/mutation';
import { IChildren } from 'utils/interface';
import { actions } from 'stores/modals';
import { get as getSelected } from 'stores/cart/selected';
import { LinearStatus } from 'components/status';
import { PopupAuthCompose } from 'compose/popup';
import { Header } from 'components/header';
import { Layout } from 'components/layout';

interface IProps {
  auth: {
    authorized: boolean;
    loading: boolean;
    error?: string;
    currentUser?: any;
  };
}

const { openLogin } = actions;
const { getCartSelectedIds } = getSelected;

export const LayoutWrapperMemo: FC<IChildren & IProps> = ({
  children,
  auth,
}) => {
  const productIds = useSelector(getCartSelectedIds);
  const dispatch = useDispatch();

  const [logout] = useMutation(LOGOUT_MUTATION, {
    update: cache =>
      cache.writeQuery({
        query: CURRENT_USER_QUERY,
        data: { currentUser: null },
      }),
  });
  const handleOpen = () => dispatch(openLogin());

  const { authorized, loading, currentUser } = auth;

  return (
    <>
      {loading && <LinearStatus />}
      <Header
        handleOpen={handleOpen}
        productIds={productIds}
        authorized={authorized}
        currentUser={currentUser}
        logout={logout}
      />
      <Layout>
        {children}
      </Layout>
      <PopupAuthCompose />
    </>
  );
};

export const LayoutWrapper = memo(LayoutWrapperMemo);