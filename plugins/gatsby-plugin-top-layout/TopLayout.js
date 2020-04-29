import * as React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles'

import theme from 'styles/theme'

export default function TopLayout({ children }) {
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </MuiThemeProvider>
  )
}

TopLayout.propTypes = {
  children: PropTypes.node,
}