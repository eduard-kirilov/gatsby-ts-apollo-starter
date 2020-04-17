/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import * as React from 'react';
import { IClasses } from 'utils/interface';
import { Container } from '@material-ui/core';

import { Header } from 'components/header';

interface IProps {
  handleOpen?: () => void;
}

export const Layout: React.FC<IProps & IClasses> = ({
  handleOpen,
  children,
}) => (
  <>
    <Header handleOpen={handleOpen} />
    <Container maxWidth="lg">{children}</Container>
  </>
);
