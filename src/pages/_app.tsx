import type { AppProps } from 'next/app';
import { Providers } from '#/components/providers';
import { Root } from '#/components/root';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Providers>
      <Root>
        <Component {...pageProps} />
      </Root>
    </Providers>
  );
};

export default App;
