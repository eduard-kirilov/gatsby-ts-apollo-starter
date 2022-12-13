/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import * as React from 'react';
import { ServerStyleSheets } from '@mui/styles';

const globalLeak = new Map();

export const wrapRootElement = ({ element, pathname }) => {
  const sheets = new ServerStyleSheets();
  
  globalLeak.set(pathname, sheets);

  return sheets.collect(element);
};

export const onRenderBody = ({ setHeadComponents, pathname }) => {
  const sheets = globalLeak.get(pathname);
  
  if (!sheets) return;

  let css = sheets.toString();

  setHeadComponents([
    <style
      id="jss-server-side"
      key="jss-server-side"
      dangerouslySetInnerHTML={{ __html: css }}
    />,
  ]);

  globalLeak.delete(pathname);
};