import { Box } from "@mui/material";
import "./input.css";
import { useState } from "react";

const Input = ({ type, label, icon }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur(event) {
    setIsFocused(false);
    setIsFilled(event.target.value !== "");
  }
  return (
    <>
      <Box
        className={`container_input ${isFocused ? "focused" : ""} ${
          isFilled ? "filled" : ""
        }`}
      >
        <input
          type={type}
          id={label}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        <label htmlFor={label}>{label}</label>
        <span><svg>{icon}</svg></span>
      </Box>
    </>
  );
};

export default Input;
