/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import React, { FC, memo } from 'react';
import {
  Grid,
  Paper,
  List,
} from '@mui/material';

import { Title5 } from 'components/typography';
import {
  PopupAddProductCompose,
  PopupUpProductCompose,
} from 'compose/popup';
import { ItemCompose } from './item';
import { TableProductsCompose } from './table';

const AdminComposeMemo: FC = () => {
  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={4} md={3}>
          <Title5 weight="bold" mb="40">Actions</Title5>
          <Paper>
            <List aria-label="list of admin actions">
              <ItemCompose />
            </List>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={8} md={9}>
          <Title5 weight="bold" mb="40">Products</Title5>
          <TableProductsCompose />
        </Grid>
      </Grid>
      <PopupAddProductCompose />
      <PopupUpProductCompose />
    </>
  );
};

export const AdminCompose = memo(AdminComposeMemo);