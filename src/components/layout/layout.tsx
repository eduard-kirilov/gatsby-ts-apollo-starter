/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import * as React from 'react';

import { IChildren, IClasses } from 'utils/interface';
import { Container, LinearProgress } from '@material-ui/core';

interface IProps {
  loading: boolean;
}

export const Layout: React.FC<IChildren & IClasses & IProps> = ({
  children,
  classes,
  loading,
}) => (
  <>
    {loading && <LinearProgress className={classes.progress} />}
    <Container maxWidth="lg" className={classes.root}>
      {children}
    </Container>
  </>
);
