import { useRef } from "react";
import { Button, TextField } from "@mui/material";

import styles from "./question.module.scss";

export default function Question({
  name,
  onChange,
  onSubmit,
  inputElementRef,
}) {
  const name_ref = inputElementRef ?? useRef(null);

  function handleChange(ev) {
    if (onChange instanceof Function) {
      onChange(ev.target.value);
    }
  }

  function handleKeyUp(ev) {
    if (ev.code === "Enter") {
      handleClick();
    }
  }

  function handleClick() {
    if (onSubmit instanceof Function) {
      onSubmit();
    }
    name_ref.current.focus();
  }

  return (
    <div className={styles.question}>
      <TextField
        inputRef={name_ref}
        label="Name"
        variant="filled"
        value={name}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
        autoFocus={true}
      />
      <Button variant="contained" onClick={handleClick}>
        Greet Me!
      </Button>
    </div>
  );
}
