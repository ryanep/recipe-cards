import '#/i18n';
import type { AppProps } from 'next/app';
import { Providers } from '#/components/providers';
import { Root } from '#/components/root';

const App = ({ Component, pageProps }: AppProps) => (
  <Providers>
    <Root>
      <Component {...pageProps} />
    </Root>
  </Providers>
);

export default App;
