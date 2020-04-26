/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import { buttonClearStyles } from 'components/button';

export const buttonLinkStyles = {
  ...buttonClearStyles,
  color: 'inherit',
  textDecoration: 'underline',
  '&:hover, &:focus': {
    color: 'inherit',
    textDecoration: 'underline',
  }
};