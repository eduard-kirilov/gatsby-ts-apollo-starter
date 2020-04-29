/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import { Theme } from '@material-ui/core/styles';
import { createStyles } from '@material-ui/styles';

export const styles = (theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.mixins.toolbar.minHeight,
    },
    progress: {
      zIndex: 1202,
    }
  });
