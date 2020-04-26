/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/

export const buttonClearStyles = {
  outline: 'none',
  border: 'none',
  backgroundColor: 'transparent',
  padding: 0,
  margin: 0,
  cursor: 'pointer',
  '&:disabled': {
    cursor: 'not-allowed',
  }
};