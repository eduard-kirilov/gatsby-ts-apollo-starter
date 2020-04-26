/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import { compose } from 'recompose';
import { withStyles } from '@material-ui/styles';
import { Products as ProductsComponent } from './products'
import { styles } from './styles';
import { IAllStringProps } from 'utils/interface';

interface IProps {
  products?: [IAllStringProps];
}

export const Products = compose<any, IProps>(withStyles(styles))(ProductsComponent)