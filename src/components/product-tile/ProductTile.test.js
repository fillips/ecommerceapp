import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import ProductTile from "./ProductTile";

it("renders a title", () => {
  const defaultProps = {
    title: "test title",
    className: "test-classname",
    data: [{}],
  };
  render(
    <BrowserRouter>
      <ProductTile {...defaultProps} />
    </BrowserRouter>
  );
  expect(screen.getByText("test title")).toBeInTheDocument();
});

it("renders an image", () => {
  const defaultProps = {
    title: "test title",
    className: "test-classname",
    data: [{}],
  };
  render(
    <BrowserRouter>
      <ProductTile {...defaultProps} />
    </BrowserRouter>
  );
  expect(screen.getByRole("img")).toBeInTheDocument();
});

it("passes a prop to the Link", () => {
  const defaultProps = {
    title: "test title",
    className: "test-classname",
    data: [{}],
  };
  render(
    <BrowserRouter>
      <ProductTile {...defaultProps} />
    </BrowserRouter>
  );
  expect(screen.getByRole("link")).toHaveAttribute(
    "href",
    "/category/testClassname"
  );
});
