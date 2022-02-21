import React from "react";
import { PropTypes as PT } from "prop-types";

import { StyledButton } from "./styled";

const GenericButton = ({ type, isSubmitButton, text, onClick, id }) => {
  return (
      <StyledButton type={type} isSubmitButton={isSubmitButton} onClick={onClick} id={id}>
        {text}
      </StyledButton>
  );
};

GenericButton.propTypes = {
};

GenericButton.defaultProps = {
};

export default GenericButton;
