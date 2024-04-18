import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import type { DocumentContext, DocumentInitialProps } from "next/document";

type MyDocumentProps = DocumentInitialProps;

class MyDocument extends Document<MyDocumentProps> {
  static async getInitialProps(context: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = context.renderPage;

    context.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) =>
          // eslint-disable-next-line react/jsx-props-no-spreading
          sheet.collectStyles(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(context);

    sheet.seal();

    return {
      ...initialProps,
      styles: sheet.getStyleElement(),
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link href="/images/favicon.png" rel="icon" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
