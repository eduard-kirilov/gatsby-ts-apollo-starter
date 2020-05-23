/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import * as React from 'react';
import { GatsbyTopLayout } from './gatsby-top-layout';

export const wrapRootElement = ({ element }) => (
  <GatsbyTopLayout>{element}</GatsbyTopLayout>
);