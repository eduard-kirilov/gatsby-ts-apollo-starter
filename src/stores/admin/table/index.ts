/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import { createSlice } from '@reduxjs/toolkit'
import { defaults } from './defaults';
import * as set from './set';
import * as get from './get';

const { actions, reducer } = createSlice({
  name: 'adminTable',
  initialState: defaults,
  reducers: set,
});


export default reducer;
export {
  actions,
  get,
};