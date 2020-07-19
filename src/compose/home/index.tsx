/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import React, { FC, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useQuery } from '@apollo/client';
import { Grid, Button, Box } from '@material-ui/core';
import { CloudDownload } from '@material-ui/icons';

import { PRODUCTS_QUERY } from 'gql/query';
import { addToCart } from 'stores/cart/selected/actions';
import { LinearStatus } from 'components/status';
import { CardProduct } from 'components/card';
import { IProducts } from 'utils/interface';
import { actions, get } from 'stores/admin/table';

import { Title5 } from 'components/typography';

const { setPage } = actions;
const { getPage, getPerPage, getDirection } = get;

const ProductsComposeMemo: FC = () => {
  const page = useSelector(getPage);
  const perPage = useSelector(getPerPage);
  const direction = useSelector(getDirection);
  const dispatch = useDispatch();
  const { data, fetchMore, loading } = useQuery<IProducts>(PRODUCTS_QUERY, {
    variables: {
      per_page: perPage,
      page: 0,
      direction,
    },
  });

  const products =
    data && data.products && data.products.data ? data.products.data : [];
  const total =
    data && data.products && data.products.data ? data.products.total : 0;

  const loadMore = (newPage: number = page) => fetchMore({
      query: PRODUCTS_QUERY,
      variables: {
        per_page: perPage,
        page: newPage,
        direction,
      },
      updateQuery: (prev: any, { fetchMoreResult }: any) => {
        if (!fetchMoreResult) return prev;
        return {
          ...prev,
          products: {
            ...prev.products,
            data: [...prev.products.data, ...fetchMoreResult.products.data],
            page: fetchMoreResult.products.page,
            total: fetchMoreResult.products.total,
          },
        };
      },
    });

  const handleLoadMore = () => {
    if (products.length < total) {
      const newPage: number = page + 1;
      dispatch(setPage(newPage));
      loadMore(newPage);
    }
  };

  const addToCard = (id: string) => dispatch(addToCart(id));

  return (
    <>
      <Title5 weight="bold" mb="40">Products</Title5>
      <Grid container spacing={3}>
        {loading ? (
          <LinearStatus />
        ) : (
          products.map((item: IProduct) => (
            <CardProduct
              key={item._id}
              _id={item._id}
              url={item.url}
              price={item.price}
              title={item.title}
              addToCard={addToCard}
              subtitle={item.subtitle}
            />
          ))
        )}
      </Grid>
      {products.length < total && (
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
      )}
    </>
  );
};

export const ProductsCompose = memo(ProductsComposeMemo);
