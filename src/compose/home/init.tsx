/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import * as React from 'react';
import { useDispatch } from 'react-redux';

import { Init } from 'components/init';
import { initCartSelected } from 'stores/cart/selected/actions';
import { actions } from 'stores/admin/table';
import { IChildren } from 'utils/interface';

const { setPerPage } = actions;

const InitComposeMemo: React.FC<IChildren> = ({ children }) => {
  const dispatch = useDispatch();

  const handleMount = () => {
    dispatch(initCartSelected());
    dispatch(setPerPage(4));
  };
    
  return (
    <Init
      handleMount={handleMount}
    >
      {children}
    </Init>
  );
};

export const InitCompose = React.memo(InitComposeMemo);