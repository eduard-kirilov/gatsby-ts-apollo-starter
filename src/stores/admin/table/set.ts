/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
interface IPayloadNumber {
  payload: number;
}

interface IPayloadString {
  payload: string;
}

export const setUpdateId = (state: any, { payload }: IPayloadString) => {
  return {
    ...state,
    updateId: payload,
  };
};

export const setPage = (state: any, { payload }: IPayloadNumber) => {
  return {
    ...state,
    page: payload,
  };
};

export const setPerPage = (state: any, { payload }: IPayloadNumber) => {
  return {
    ...state,
    perPage: payload,
  };
};

export const setDirection = (state: any, { payload }: IPayloadString) => {
  return {
    ...state,
    direction: payload,
  };
};