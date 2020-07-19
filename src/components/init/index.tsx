/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import React, { useEffect, memo } from 'react';

interface IProps {
  children: React.ReactNode;
  handleMount?: () => void;
}
export const InitMemo: React.FC<IProps> = ({
  children,
  handleMount,
}) => {
  useEffect(() => {
    handleMount();
  }, []);

  return <>{children}</>;
};

export const Init = memo(InitMemo);