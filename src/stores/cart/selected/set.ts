/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import { defaults } from './defaults';

interface ISetSelectedIds {
  payload: string[];
}

export const setSelectedIds = (state: any, { payload }: ISetSelectedIds) => {
  return {
    ...state,
    ids: payload,
  };
};

export const resetSelectedIds = (state: any, { payload }: ISetSelectedIds) => {
  return {
    ...state,
    ...defaults,
  };
};
