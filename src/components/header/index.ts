/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import { compose } from 'recompose';
import { withStyles } from '@material-ui/styles';
import { Header as HeaderComponent } from './header';
import { styles } from './styles';
import { IAllStringProps } from 'utils/interface';

interface IProps {
  authorized: boolean;
  handleOpen?: () => void;
  logout?: () => void;
  currentUser: IAllStringProps;
}

export const Header = compose<any, IProps>(withStyles(styles))(HeaderComponent);
