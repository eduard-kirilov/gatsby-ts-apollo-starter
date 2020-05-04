/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import * as React from 'react';

import { IProduct } from 'utils/interface';

import { Grid, Button } from '@material-ui/core';

import {
  CardActionsStyled,
  CardContentStyled,
  CardMediaStyled,
  CardStyled,
  Subtitle,
  Title,
} from './styles';

interface IProps {
  addToCard: (key: string) => void;
}
export const CardProduct: React.FC<IProps & IProduct> = ({
  addToCard,
  subtitle,
  title,
  url,
  _id,
}) => {
  return (
    <Grid item xs={12} sm={6} md={3}>
      <CardStyled>
        <CardMediaStyled image={url} title={title} />
        <CardContentStyled>
          <Title weight="bold">{title}</Title>
          <Subtitle weight="regular">{subtitle}</Subtitle>
        </CardContentStyled>
        <CardActionsStyled>
          <Button
            name="buy"
            size="small"
            color="primary"
            variant="contained"
            onClick={() => addToCard(_id)}
          >
            В корзину
          </Button>
        </CardActionsStyled>
      </CardStyled>
    </Grid>
  );
};
