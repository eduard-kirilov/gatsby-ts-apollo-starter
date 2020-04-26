/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import { compose } from 'recompose';
import { withStyles } from '@material-ui/styles';
import { CardProduct as CardProductComponent } from './product'
import { styles } from './styles';
import { ICardProduct } from 'utils/interface';

export const CardProduct = compose<any, ICardProduct>(withStyles(styles))(CardProductComponent)