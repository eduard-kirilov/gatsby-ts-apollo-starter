/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
export const openModalLogin = (state: any, action?: any) => {
  return {
    ...state,
    modalLoginOpen: true,
  };
}

export const closeModalLogin = (state: any, action?: any) => {
  return {
    ...state,
    modalLoginOpen: false,
  };
}