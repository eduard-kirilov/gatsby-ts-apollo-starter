/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import * as React from 'react';
import { Grid } from '@material-ui/core';

import { Title } from './styles';

interface IProps {
  table: React.ReactNode;
}

export const Cart: React.FC<IProps> = ({
  table,
}) => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Title weight="bold">My cart</Title>
        {table}
      </Grid>
    </Grid>
  );
};
