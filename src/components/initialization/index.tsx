/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import * as React from 'react';

interface IProps {
  children: React.ReactNode;
  handleMount?: () => void;
}
export const Initialization: React.FC<IProps> = ({
  children,
  handleMount,
}) => {
  React.useEffect(() => {
    handleMount();
  });

  return <>{children}</>;
};
