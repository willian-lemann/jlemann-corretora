import Document, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Main,
  Head,
  NextScript,
} from "next/document";

const MyDocument = () => {
  return (
    <Html lang="pt">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
