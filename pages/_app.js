import App from 'next/app'
import React from 'react'

import * as Sentry from '@sentry/browser'

class NextApp extends App {
  componentDidMount() {
    if (typeof window !== 'undefined') {
      // const SmoothScroll = require('smooth-scroll')
      // const scroll = new SmoothScroll('a[href*="#"]', {
      //   offset: 200
      // })
      if (process.env.NODE_ENV === 'production') {
        // const LogRocket = require('logrocket')
        // LogRocket.init(process.env.NEXT_PUBLIC_LOGROCKET)
        Sentry.init({
          dsn: process.env.NEXT_PUBLIC_SENTRY
        })
      }
    }
  }

  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}

export default NextApp
