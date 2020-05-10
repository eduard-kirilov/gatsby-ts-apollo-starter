/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
export const getLoginModalsStatus = (state:any) => {
  return state.modals.login;
}
export const getAddProductModalsStatus = (state:any) => {
  return state.modals.addProduct;
}
export const getUpProductModalsStatus = (state:any) => {
  return state.modals.upProduct;
}