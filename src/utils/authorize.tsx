/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import * as React from 'react';
import { useQuery } from '@apollo/client';
import { CURRENT_USER_QUERY } from 'gql/query';
import { IChildren, IAllStringProps } from 'utils/interface';

interface IQuery {
  currentUser?: [IAllStringProps];
}

export const AuthContext = React.createContext({
  authorized: false,
  currentUser: {},
  loading: false,
})

export const AuthProvider: React.FC<IChildren> = ({ children }) => {
  const { loading, error, data } = useQuery<IQuery>(CURRENT_USER_QUERY);

  const newProps = {
    authorized: !!(data && data.currentUser),
    currentUser: data && data.currentUser,
    error,
    loading,
  }
  
  return (
    <AuthContext.Provider value={newProps}>
      {children}
    </AuthContext.Provider>
  );
};
