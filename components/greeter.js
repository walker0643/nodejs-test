import { Fade } from "@mui/material";

import styles from "./greeter.module.scss";

export default function Greeter({ name }) {
  const have_name = name ? true : false;
  const fade_timeout = have_name ? 1000 : 0;

  return (
    <div className={styles.fadeContainer}>
      <Fade timeout={fade_timeout} in={!have_name}>
        <div className={styles.greeting}>What is your name? </div>
      </Fade>
      <Fade timeout={fade_timeout} in={have_name}>
        <div className={styles.greeting}>Hello, {name}!</div>
      </Fade>
    </div>
  );
}
