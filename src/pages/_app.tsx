import "../styles/globals.css";

import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="nextjs" key="title" />

        <title>JLemann Corretora</title>
      </Head>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
