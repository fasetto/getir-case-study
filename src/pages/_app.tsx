import Head from "next/head";
import { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, "sans-serif";
    background-color: #fafafa;
  }

  button {
    font-family: inherit;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>GetirLocals</title>
      </Head>

      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
