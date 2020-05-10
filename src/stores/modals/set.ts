/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
export const openLogin = (state: any, action: unknown) => {
  return {
    ...state,
    login: true,
  };
};

export const closeLogin = (state: any, action: unknown) => {
  return {
    ...state,
    login: false,
  };
};

export const openAddProduct = (state: any, action: unknown) => {
  return {
    ...state,
    addProduct: true,
  };
};

export const closeAddProduct = (state: any, action: unknown) => {
  return {
    ...state,
    addProduct: false,
  };
};

export const openUpProduct = (state: any, action: unknown) => {
  return {
    ...state,
    upProduct: true,
  };
};

export const closeUpProduct = (state: any, action: unknown) => {
  return {
    ...state,
    upProduct: false,
  };
};
