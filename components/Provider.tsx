import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { ThemeProvider, Preflight } from '@xstyled/styled-components'
import theme from 'lib/styles/theme'
import createGlobalStyles from 'lib/styles/globals'
import store from 'lib/store'

interface ProviderProps {
  children: React.ReactNode
}

const GlobalStyles = createGlobalStyles(theme)

export function Provider({ children }: ProviderProps) {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <Preflight />
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </ReduxProvider>
  )
}
