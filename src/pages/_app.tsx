import "../styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";

import { ApolloProvider } from "@apollo/client";
import { AlertProvider } from "../components/shared/alert";
import { apolloClient } from "../config/apollo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="nextjs" key="title" />

        <title>JLemann Corretora</title>
      </Head>
      <ApolloProvider client={apolloClient}>
        <AlertProvider />
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}

export default MyApp;
