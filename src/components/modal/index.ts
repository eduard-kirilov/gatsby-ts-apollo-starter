/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import { compose } from 'recompose';
import { withStyles } from '@material-ui/styles';
import { Modal as ModalComponent } from './modal'
import { styles } from './modal.styles';


export const Modal = compose(withStyles(styles))(ModalComponent)