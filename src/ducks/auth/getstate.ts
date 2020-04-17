/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
export const getModalLoginOpen = (state:any) => {
console.log('state ', state)
  return state.ui.modalLoginOpen;
}