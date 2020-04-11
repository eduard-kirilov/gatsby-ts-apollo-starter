/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import * as React from 'react';

import { Grid } from '@material-ui/core';
import { v4 } from 'uuid';

import { IClasses, ICardProduct } from 'utils/interface';
import { CardProduct } from 'components/card/product';

interface IProps {
  page: string;
  data?: {
    products?: [ICardProduct];
  };
}
interface ISwitchPage {
  [key: string]: JSX.Element;
}
/**
 * This is temporary page flooding
 */
export const Content: React.FC<IClasses & IProps> = ({ page, data = {} }) => {
  const { products = [] } = data;
  const switchPage: ISwitchPage = {
    notFound: (
      <>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </>
    ),
    home: (
      <>
        <h1>Home</h1>
        <p>Hi people welcome to your.</p>
        <p>Now go build something great.</p>
      </>
    ),
    admin: (
      <>
        <h1>Admin</h1>
        <p>Hi people welcome to your.</p>
        <p>Now go build something great.</p>
      </>
    ),
    shop: (
      <>
        <h1>Карты товаров</h1>
        <Grid container spacing={4}>
          {products.map((item: ICardProduct) => (
            <CardProduct
              key={v4()}
              url={item.url}
              title={item.title}
              subtitle={item.subtitle}
            />
          ))}
        </Grid>
      </>
    )
  }
  return page in switchPage ? switchPage[page] : null;
};

