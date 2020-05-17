/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { LinearProgressStyled } from './styled';

export const LinearStatus = () => {
  if (typeof window !== 'object') return null;
  const appRoot = document.getElementById('___gatsby');
  const el = document.createElement('div');
  el.classList.add('linear-status');
  React.useEffect(() => {
    appRoot.parentNode.appendChild(el);
    return function cleanup() {
      appRoot.parentNode.removeChild(el);
    };
  });

  return ReactDOM.createPortal(<LinearProgressStyled />, el);
}