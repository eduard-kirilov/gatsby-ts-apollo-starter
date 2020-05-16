/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import * as React from 'react';
import {
  Grid,
  Paper,
  List,
} from '@material-ui/core';

import { Title } from 'components/admin/styles';
import {
  PopupAddProductCompose,
  PopupUpProductCompose,
} from 'compose/popup';
import { ItemCompose } from './item';
import { TableProductsCompose } from './table';

const AdminComposeMemo = () => {
  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={4} md={3}>
          <Title weight="bold">Actions</Title>
          <Paper>
            <List aria-label="list of admin actions">
              <ItemCompose />
            </List>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={8} md={9}>
          <Title weight="bold">Products</Title>
          <TableProductsCompose />
        </Grid>
      </Grid>
      <PopupAddProductCompose />
      <PopupUpProductCompose />
    </>
  );
};

export const AdminCompose = React.memo(AdminComposeMemo);