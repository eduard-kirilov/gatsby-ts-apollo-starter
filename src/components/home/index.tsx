/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import * as React from 'react';
import { v4 } from 'uuid';
import { Grid, Button, Box } from '@material-ui/core';
import { CloudDownload } from '@material-ui/icons';
import { IProduct } from 'utils/interface';
import { CardProduct } from 'components/card';

import { Title } from './styles';

interface IProps {
  addToCard: (key: string) => void;
  handleLoadMore: () => void;
  products?: IProduct[];
}

export const Home: React.FC<IProps> = ({
  products = [],
  handleLoadMore,
  addToCard,
}) => (
  <>
    <Title weight="bold">Products</Title>
    <Grid container spacing={3}>
      {products.map((item: IProduct) => (
        <CardProduct
          key={v4()}
          _id={item._id}
          url={item.url}
          price={item.price}
          title={item.title}
          addToCard={addToCard}
          subtitle={item.subtitle}
        />
      ))}
    </Grid>
    <Box mt={3}>
      <Button
        variant="contained"
        color="primary"
        size="small"
        startIcon={<CloudDownload />}
        onClick={handleLoadMore}
      >
        More product
      </Button>
    </Box>
  </>
);
