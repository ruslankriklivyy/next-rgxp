import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import NextNprogress from 'nextjs-progressbar';
import { Provider } from 'react-redux';

import store from '../store/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <NextNprogress color="#5280eb" startPosition={0.3} stopDelayMs={200} height={3} />
    </Provider>
  );
}
export default MyApp;
