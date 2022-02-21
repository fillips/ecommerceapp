import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import HomePage from "./HomePage";
import { render, fireEvent, screen } from "../../mocks/test-utils";

const server = setupServer(
  rest.get("https://fakestoreapi.com/products", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
          price: 109.95,
          description:
            "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
          category: "men's clothing",
          image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
          rating: {
            rate: 3.9,
            count: 120,
          },
        },
        {
          id: 2,
          title: "Mens Casual Premium Slim Fit T-Shirts ",
          price: 22.3,
          description:
            "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
          category: "men's clothing",
          image:
            "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
          rating: {
            rate: 4.1,
            count: 259,
          },
        },
      ])
    );
  })
);

beforeAll(() => {
  server.listen();
});
afterAll(() => {
  server.close();
});
afterEach(() => {
  server.resetHandlers();
});

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

const mockStore = {
  auth: { authUser: { loggedIn: true, token: "123456789" } },
  cart: { addedItems: [] },
  loginApi: {},
  productsApi: {},
};

beforeEach(() => {
  useSelector.mockImplementation((callback) => {
    return callback(mockStore);
  });
});

it("renders a Header component", async () => {
  render(
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>,
    { initialState: mockStore }
  );
  expect(screen.getByText("PrimarySale")).toBeInTheDocument();
  const svgIcon = screen.getByTitle("cart");
  expect(svgIcon).toBeInTheDocument();
});

it("renders a title component", async () => {
  render(
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>,
    { initialState: mockStore }
  );

  expect(screen.getByText("Shop By Category")).toBeInTheDocument();
});

/*
 Additional tests

 - when component is loading it returns a loading spinner. The ProductTile component is not rendered

 - when component is not loading the ProductTile component is rendered

 - when an error is returned from the API an error message is displayed
*/