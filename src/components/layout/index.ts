/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import { compose } from 'recompose';
import { withStyles } from '@material-ui/styles';
import { Layout as LayoutComponent } from './layout'
import { styles } from './layout.styles';

interface IProps {
  auth?: React.ReactNode;
};

export const Layout = compose<any, IProps>(withStyles(styles))(LayoutComponent);