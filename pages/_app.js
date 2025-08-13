import Head from "next/head";
import "../styles/globals.css";
import { ThemeProvider } from "@mui/material";
import theme from "../styles/styles/theme";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* <link rel="icon" href="/favicon.jpeg" type="image/jpeg" /> */}

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
