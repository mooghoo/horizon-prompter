import * as React from 'react'
import NextApp from 'next/app'
import theme from "../components/force-theme"
import { ThemeProvider } from 'theme-ui'
import ForceTheme from '../components/force-theme'
import { Global, css } from "@emotion/react"
import { GlobalStyles } from "../components/theme-config"

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider>
      <GlobalStyles />
      <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
