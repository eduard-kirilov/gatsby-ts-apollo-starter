/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import { IAllStringProps } from 'utils/interface';

export const setUpdateId = (state: any, { payload }: IAllStringProps) => {
  return {
    ...state,
    updateId: payload,
  };
};
