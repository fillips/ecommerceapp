import React from "react";

import { InputLabel, Input, InputContainer } from "./styled";

const GenericInput = ({
  id,
  name,
  placeholder,
  onChange,
  type,
  onBlur,
  value,
}) => {
  return (
    <InputContainer>
      <InputLabel htmlFor={id}>{name}</InputLabel>
      <Input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
    </InputContainer>
  );
};

export default GenericInput;
