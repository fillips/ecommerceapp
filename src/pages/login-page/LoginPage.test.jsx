import LoginPage from "./LoginPage";
import React from "react";
import userEvent from '@testing-library/user-event'
import { waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { BrowserRouter } from "react-router-dom";
import { render, fireEvent, screen } from "../../mocks/test-utils";

const server = setupServer(
  rest.get("https://fakestoreapi.com/auth/login", (req, res, ctx) => {
      const data = { username: "validusername", password: "validpassword"}
      req.body(data)
    return res(
      ctx.status(200),
      ctx.json({token: "123456789"})
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
  useSelector: (selector) => selector(mockStore),
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

it("renders a Login form", () => {
  const mockedNavigator = jest.fn();

  jest.mock("react-router-dom", () => ({
    useNavigate: () => mockedNavigator,
  }));

  render(
    <BrowserRouter>
      <LoginPage />
    </BrowserRouter>
  );

  expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  expect(screen.getByText("Log in to start shopping")).toBeInTheDocument();
  expect(screen.getByLabelText("username")).toBeInTheDocument();
  expect(screen.getByLabelText("password")).toBeInTheDocument();
  expect(screen.getByRole("button")).toBeInTheDocument();
});

it("user input is stored in the form input", async () => {
  render(
    <BrowserRouter>
      <LoginPage />
    </BrowserRouter>
  );

  userEvent.type(screen.getByLabelText("username"), "foobar123");
  userEvent.type(screen.getByLabelText("password"), "foobar456");

  await waitFor(() => expect(screen.getByLabelText("username").value).toBe("foobar123"))
  await waitFor(() => expect(screen.getByLabelText("password").value).toBe("foobar456"))
});
