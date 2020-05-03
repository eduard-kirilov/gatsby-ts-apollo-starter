/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import { compose } from 'recompose';
import { withStyles } from '@material-ui/styles';
import { Content as ContentComponent } from './content'
import { styles } from './styles';
import { IAllStringProps } from 'utils/interface';

export const Content = compose<any, IAllStringProps>(withStyles(styles))(ContentComponent)