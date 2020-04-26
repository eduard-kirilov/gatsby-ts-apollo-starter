/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import { compose } from 'recompose';
import { withStyles } from '@material-ui/styles';
import { Content as ContentComponent } from './content'
import { styles } from './styles';


export const Content = compose(withStyles(styles))(ContentComponent)