/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import { compose } from 'recompose';
import { withStyles } from '@material-ui/styles';
import { PopupAuth as PopupAuthComponent } from './auth'
import { styles } from './auth.styles';

interface IProps {
  handleClose?: () => void;
  handleSignup?: (props: IAllStringProps) => void;
  handleLogin?: (props: IAllStringProps) => void;
}

export const PopupAuth = compose<any, IProps>(withStyles(styles))(PopupAuthComponent)