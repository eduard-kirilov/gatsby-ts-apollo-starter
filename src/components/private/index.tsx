import * as React from 'react';
import { navigate } from 'gatsby';
import { IChildren } from 'utils/interface';
import { LinearProgress } from '@material-ui/core';

interface IProps {
  loading: boolean;
  authorized: boolean;
};

export const Private: React.FC<IProps & IChildren> = ({
  children,
  loading,
  authorized,
}) => {
  if (loading) return <LinearProgress />;
  if (!authorized) {
    navigate('/');
    return null;
  }
  return <>{children}</>;
};
