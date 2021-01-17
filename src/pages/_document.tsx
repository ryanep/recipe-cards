import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
  DocumentInitialProps,
} from 'next/document';
import Helmet, { HelmetData } from 'react-helmet';
import { ServerStyleSheet } from 'styled-components';

interface MyDocumentProps extends DocumentInitialProps {
  helmet: HelmetData;
}

class MyDocument extends Document<MyDocumentProps> {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      const helmet = Helmet.renderStatic();
      return {
        ...initialProps,
        helmet,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    const { helmet } = this.props;
    return (
      <Html>
        <Head>
          <link rel="icon" type="image/png" href="/static/favicon.png" />
          {helmet.title.toComponent()}
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
