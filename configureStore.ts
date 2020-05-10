/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import { configureStore } from '@reduxjs/toolkit';

import adminTable from './src/stores/admin/table';
import cartSelected from './src/stores/cart/selected';
import cartTable from './src/stores/cart/table';
import modals from './src/stores/modals';

export const store = configureStore({
  reducer: {
    adminTable,
    cartSelected,
    cartTable,
    modals,
  },
});