import * as React from 'react';
import { navigate } from 'gatsby';
import { IChildren } from 'utils/interface';
import { LinearStatus } from 'components/status';

interface IProps {
  loading: boolean;
  authorized: boolean;
};

export const PrivateMemo: React.FC<IProps & IChildren> = ({
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

export const Private = React.memo(PrivateMemo);
