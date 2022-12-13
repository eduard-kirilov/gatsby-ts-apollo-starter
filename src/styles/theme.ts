/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  mixins: {
    toolbar: {
      minHeight: 45,
    }
  },
});

export default theme;
