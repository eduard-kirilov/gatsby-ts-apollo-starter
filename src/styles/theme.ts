/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  mixins: {
    toolbar: {
      '@media (min-width:0px) and (orientation: landscape)': {
        minHeight: 45,
      },
      '@media (min-width:600px)': {
        minHeight: 50,
      },
      minHeight: 40,
    }
  },
  palette: {
    primary: {
      light: '#F9EDDA',
      main: '#FFA33F',
    },
  },
});

console.log('theme ', theme)

export default theme;
