/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import * as React from 'react';

import { IAllStringProps } from 'utils/interface';

interface ISwitchPage {
  [key: string]: JSX.Element;
}
/**
 * This is temporary page flooding
 */
export const Content: React.FC<IAllStringProps> = ({ page }) => {
  const switchPage: ISwitchPage = {
    notFound: (
      <>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </>
    ),
    admin: (
      <>
        <h1>Admin</h1>
        <p>Hi people welcome to your.</p>
        <p>Now go build something great.</p>
      </>
    ),
  }
  return page in switchPage ? switchPage[page] : null;
};

