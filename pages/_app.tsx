import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import NextNprogress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <NextNprogress color="#A6B8E3" startPosition={0.3} stopDelayMs={200} height={3} />
    </>
  );
}
export default MyApp;
