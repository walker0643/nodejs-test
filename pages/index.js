import { useState, useRef, useEffect } from "react";

import Greeter from "../components/greeter";
import Question from "../components/question";

export default function Index() {
  const [state, setState] = useState({
    name_input: "",
    name: "",
  });

  const defaultFocusRef = useRef(null);

  function handleChange(value) {
    setState({ ...state, name_input: value });
  }

  function handleSubmit() {
    const name = state.name_input.trim();
    if (name) {
      setState({ ...state, name_input: "", name: name });
    } else {
      setState({ ...state, name_input: name, name: "" });
    }
  }

  useEffect(() => {
    defaultFocusRef.current?.focus();
  }, []);

  return (
    <>
      <Greeter name={state.name} />
      <Question
        name={state.name_input}
        onChange={handleChange}
        onSubmit={handleSubmit}
        inputElementRef={defaultFocusRef}
      />
    </>
  );
}
