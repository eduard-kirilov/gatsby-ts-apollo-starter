/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import { IAllStringProps } from 'utils/interface';

interface ISetSelectedIds {
  payload: [string];
}

export const setSelectedIds = (state: any, { payload }: ISetSelectedIds) => {
  return {
    ...state,
    ids: payload,
  };
};
