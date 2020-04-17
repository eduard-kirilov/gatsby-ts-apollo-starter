/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import { configureStore } from '@reduxjs/toolkit';

import ui from './src/ducks/ui';
import auth from './src/ducks/auth';

export const store = configureStore({
  reducer: {
    ui,
    auth,
  },
});