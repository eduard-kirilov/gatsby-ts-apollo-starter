/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import { Theme } from '@material-ui/core/styles';
import { createStyles } from '@material-ui/styles';
import { buttonLinkStyles } from 'components/button';

export const styles = (theme: Theme) =>
  createStyles({
    title: {
      marginTop: 0,
      marginBottom: 16,
    },
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
    },
    input: {
      width: '250px',
      marginBottom: 16,
    },
    password: {
      width: '250px',
      marginBottom: 16,
    },
    confirmPassword: {
      width: '250px',
      marginBottom: 32,
    },
    signupSet: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    button: {
      width: '100%',
      marginBottom: 16,
    },
    text: {
      marginBottom: 16,
    },
    buttonClear: {
      ...buttonLinkStyles,
      fontSize: '0.75rem',
      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
      fontWeight: 400,
      marginLeft: 8,
      color: theme.palette.primary.dark,
      '&:hover, &:focus': {
        color: theme.palette.primary.light,
      }
    },
  });
