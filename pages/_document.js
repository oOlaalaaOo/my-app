import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta
            name="description"
            content="A Progressive Web App built using Next.js"
          />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="manifest" type="image/x-icon" href="/manifest.json" />
          <meta name="theme-color" content="#2196f3" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
