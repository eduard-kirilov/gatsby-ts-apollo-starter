/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import { compose } from 'recompose';
import { withStyles } from '@material-ui/styles';
import { CardProduct as CardProductComponent } from './card-product'
import { styles } from './card-product.styles';


export const CardProduct = compose(withStyles(styles))(CardProductComponent)