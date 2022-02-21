import React from "react";
import { render, screen } from "@testing-library/react";
import ShoppingCart from "./ShoppingCart";

it("renders an icon", () => {
  const defaultProps = {
    height: 20,
    total: 99,
  };
  render(<ShoppingCart {...defaultProps} />);
  const svgIcon = screen.getByTitle("cart");
  expect(svgIcon).toBeInTheDocument();
});

it("renders a number beside the icon", () => {
  const defaultProps = {
    height: 20,
    total: 99,
  };
  render(<ShoppingCart {...defaultProps} />);
  expect(screen.getByText("99")).toBeInTheDocument();
});
