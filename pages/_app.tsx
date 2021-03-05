import App, { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import { Provider } from 'components/Provider'
import { DefaultSeo } from 'next-seo'
import ReactTooltip from 'react-tooltip'
import SEO from 'lib/config/seo'

export default class BangRocksApp extends App<AppProps> {
  state: { [key: string]: number } = { responsiveForceUpdateHotFix: 0 }

  componentDidMount() {
    // Force update on client side render for responsive hooks [sam]
    this.setState({ responsiveForceUpdateHotFix: 1 }, () => {
      this.setState({ responsiveForceUpdateHotFix: 2 })
    })
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Provider>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0" />
        </Head>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <DefaultSeo {...SEO} />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        {this.state.responsiveForceUpdateHotFix !== 1 && <Component {...pageProps} />}
        <ReactTooltip />
      </Provider>
    )
  }
}
