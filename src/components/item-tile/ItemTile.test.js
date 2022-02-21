import React from "react";
import * as reactRedux from "react-redux";
import { render, screen } from "@testing-library/react";
import ItemTile from "./ItemTile";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

it("renders data from prop to item tile", () => {
  const defaultProps = {
    data: {
      category: "electronics",
      description: "test description",
      id: 2,
      image: "https://fakestoreapi.com/img/123456.jpg",
      price: 15.01,
      rating: { rate: 4, count: 123 },
      title: "test title",
    },
  };
  const useDispatchMock = reactRedux.useDispatch;
  const useSelectorMock = reactRedux.useSelector;
  useDispatchMock.mockImplementation(() => () => {});
  useSelectorMock.mockReturnValue({ id: 2, quantity: 0 });
  render(<ItemTile {...defaultProps} />);

  expect(screen.getByText("test title")).toBeInTheDocument();
  expect(screen.getByText("£15.01")).toBeInTheDocument();
  expect(screen.getByText("test description")).toBeInTheDocument();
  expect(screen.getByAltText("test title")).toBeInTheDocument()
  expect(
    screen.getByRole("button", { name: /Add to cart/i })
  ).toBeInTheDocument();
});

it("does not render a remove from cart button if item is not in cart", () => {
    const defaultProps = {
        data: {
          category: "electronics",
          description: "test description",
          id: 2,
          image: "https://fakestoreapi.com/img/123456.jpg",
          price: 15.01,
          rating: { rate: 4, count: 123 },
          title: "test title",
        },
      };
      const useDispatchMock = reactRedux.useDispatch;
      const useSelectorMock = reactRedux.useSelector;
      useDispatchMock.mockImplementation(() => () => {});
      useSelectorMock.mockReturnValue({ id: 2, quantity: 0 });
      render(<ItemTile {...defaultProps} />);
      expect(
        screen.queryByRole("button", { name: /Remove from cart/i })
      ).not.toBeInTheDocument();
});