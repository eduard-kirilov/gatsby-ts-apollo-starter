/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import { compose } from 'recompose';
import { withStyles } from '@material-ui/styles';
import { CardProduct as CardProductComponent } from './product'
import { styles } from './styles';
import { ICardProductProps } from 'utils/interface';

export const CardProduct = compose<any, ICardProductProps>(withStyles(styles))(CardProductComponent)