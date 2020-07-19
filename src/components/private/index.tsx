/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import React, { FC, memo } from 'react';
import { navigate } from 'gatsby';
import { IChildren } from 'utils/interface';
import { LinearStatus } from 'components/status';

interface IProps {
  loading: boolean;
  authorized: boolean;
};

export const PrivateMemo: FC<IProps & IChildren> = ({
  children,
  loading,
  authorized,
}) => {
  if (loading) return <LinearStatus />;
  if (!authorized) {
    navigate('/');
    return null;
  }
  return <>{children}</>;
};

export const Private = memo(PrivateMemo);
