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

import { v4 } from 'uuid';

import { Layout } from '../../components/layout';
import { SEO } from '../../components/seo';

interface ICard {
  [key: string]: string;
}
interface IProps {
  data: {
    products?: ICard[];
  };
  classes: {
    [key: string]: string;
  };
}

export const Shop: React.FC<IProps> = ({ classes, data }) => {
  const { products = [] } = data;
  console.log('Shop products ', products);
  return (
    <Layout>
      <SEO title="Shop" />
      <h1>Карты товаров</h1>
      <Grid container spacing={4}>
        {products.map((item) => (
          <Grid item key={v4()} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={item.url}
                title={item.title}
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {item.title}
                </Typography>
                <Typography>
                  {item.subtitle}
                </Typography>
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
        ))}
      </Grid>
    </Layout>
  );
};
