import React from "react";
import { render, screen } from "@testing-library/react";
import GenericButton from "./GenericButton";

it("passes props to a generic button", () => {
  const defaultProps = {
    onClick: jest.fn(),
    text: "test button",
    id: "test-button-id",
    type: "submit",
    isSubmitButton: true,
  };
  render(<GenericButton {...defaultProps} />);
  expect(screen.getByText("test button")).toBeInTheDocument();
});