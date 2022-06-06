import Head from "next/head";
import CssBaseline from "@mui/material/CssBaseline";

import styles from "./_app.module.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <CssBaseline />
      <div className={styles.component}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
