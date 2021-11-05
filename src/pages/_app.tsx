import "@/styles/globals.css";
import "focus-visible";

import Head from "next/head";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Next JS Template</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
