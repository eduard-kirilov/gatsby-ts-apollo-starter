/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { ListItem, ListItemIcon } from '@material-ui/core';
import { Add } from '@material-ui/icons';

import { actions } from 'stores/modals';
import { ListItemTextStyled } from 'components/admin/styles';

const { openAddProduct } = actions;

const ItemComposeMemo: React.FC = () => {
  const dispatch = useDispatch();
  const handleOpen = () => dispatch(openAddProduct());
  return (
    <ListItem component="li" button onClick={handleOpen}>
      <ListItemIcon>
        <Add />
      </ListItemIcon>
      <ListItemTextStyled primary="Add product" />
    </ListItem>
  );
};

export const ItemCompose = React.memo(ItemComposeMemo);