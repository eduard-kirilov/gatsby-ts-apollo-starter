/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import { compose } from 'recompose';
import { withStyles } from '@material-ui/styles';
import { Products as ProductsComponent } from './products'
import { styles } from './styles';
import { IProductsProps } from 'utils/interface';


export const Products = compose<any, IProductsProps>(withStyles(styles))(ProductsComponent)