import React from "react";
import * as reactRedux from "react-redux";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

it("renders a title", () => {
  const mockStore = {
    cart: {
      total: 5,
    },
  };

  const useSelectorMock = reactRedux.useSelector;
  const useDispatchMock = reactRedux.useDispatch;
  useDispatchMock.mockImplementation(() => () => {});
  useSelectorMock.mockImplementation((selector) => selector(mockStore));
  render(<Header />);

  expect(screen.getByText("PrimarySale")).toBeInTheDocument();
});

it("renders a shopping cart component", () => {
  const mockStore = {
    cart: {
      total: 5,
    },
  };

  const useSelectorMock = reactRedux.useSelector;
  const useDispatchMock = reactRedux.useDispatch;
  useDispatchMock.mockImplementation(() => () => {});
  useSelectorMock.mockImplementation((selector) => selector(mockStore));
  render(<Header />);

  const svgIcon = screen.getByTitle("cart");
  expect(svgIcon).toBeInTheDocument();
  expect(screen.getByText("5")).toBeInTheDocument();
});
