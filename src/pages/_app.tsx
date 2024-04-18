import "#/i18n";
import { Providers } from "#/components/providers";
import { Root } from "#/components/root";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => (
  <Providers>
    <Root>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </Root>
  </Providers>
);

export default App;
