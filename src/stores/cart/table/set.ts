/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import { IAllStringProps } from 'utils/interface';

interface ISetSortId {
  payload: string;
}

export const setSortId = (state: any, { payload }: ISetSortId) => {
  return {
    ...state,
    sortId: payload,
  };
};
