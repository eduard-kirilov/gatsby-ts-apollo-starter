/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import * as React from 'react';

import {
  Grid,
  Card,
  Button,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
} from '@material-ui/core';

import { IClasses, ICardProduct } from 'utils/interface';

export const CardProduct: React.FC<IClasses & ICardProduct> = ({
  url,
  title,
  subtitle,
  classes,
}) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={url}
          title={title}
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography>{subtitle}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Посмотреть
          </Button>
          <Button size="small" color="primary">
            Изменить
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
