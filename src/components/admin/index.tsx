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
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { TableProducts } from 'components/table';

import { IProducts } from 'utils/interface';
import { Title } from './styles';

interface IProps {
  table: React.ReactNode;
  hadleOpenPopupAddProduct: () => void;
}

export const Admin: React.FC<IProducts & IProps> = ({
  table,
  hadleOpenPopupAddProduct,
}) => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={5} md={3}>
        <Title weight="bold">Actions</Title>
        <Paper>
          <List aria-label="list of admin actions">
            <ListItem button onClick={hadleOpenPopupAddProduct}>
              <ListItemIcon>
                <Add />
              </ListItemIcon>
              <ListItemText primary="Add product" />
            </ListItem>
          </List>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={7} md={9}>
        <Title weight="bold">Products</Title>
        {table}
      </Grid>
    </Grid>
  );
};
