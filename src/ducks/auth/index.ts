/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import { createSlice } from '@reduxjs/toolkit'
import { defaults } from './defaults';
import * as setstate from './setstate';
import * as getstate from './getstate';

const { actions, reducer } = createSlice({
  name: 'auth',
  initialState: defaults,
  reducers: setstate,
});


export default reducer;
export {
  actions,
  getstate,
};