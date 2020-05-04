/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import * as React from 'react';

import { LayoutWrapper } from 'compose/layout';
import { ProductsCompose } from 'compose/home';
import { SEO } from 'components/seo';
import { AuthContext } from 'utils/authorize';

import { IAutorize } from 'utils/interface';

const Home: React.FC = () => {
  const [productIds, setProductIds] = React.useState([])
  const addToCard = (id: string) => {
    const oldIds = productIds;
    let ids: string[] = [...oldIds];
    if (!oldIds.includes(id)) {
      ids = [...ids, id];
    }
    setProductIds(ids);
  };
  return (
    <AuthContext.Consumer>
      {(auth: IAutorize) => (
        <LayoutWrapper auth={auth} productIds={productIds}>
          <SEO title="Home" />
          <ProductsCompose addToCard={addToCard} />
        </LayoutWrapper>
      )}
    </AuthContext.Consumer>
  );
}

export default Home;
