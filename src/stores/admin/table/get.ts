/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
export const getUpdateId = (state:any) => {
  return state.adminTable.updateId;
}

export const getPage = (state:any) => {
  return state.adminTable.page;
}

export const getPerPage = (state:any) => {
  return state.adminTable.perPage;
}

export const getDirection = (state:any) => {
  return state.adminTable.direction;
}
