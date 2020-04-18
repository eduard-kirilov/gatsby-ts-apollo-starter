/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import * as React from 'react';
import { IClasses } from 'utils/interface';
import { Container } from '@material-ui/core';

export const Layout: React.FC<IClasses> = ({ children }) => (
  <Container maxWidth="lg">{children}</Container>
);
