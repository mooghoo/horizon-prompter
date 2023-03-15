import Document, { Html, Head, Main, NextScript } from 'next/document'
import { InitializeColorMode } from 'theme-ui'

export default class extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
        <link
                  rel="preload"
                  href="./public/BLMelody-Medium.woff"
                  as="font"
                  type="font/woff"
                  crossOrigin=""
                />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
