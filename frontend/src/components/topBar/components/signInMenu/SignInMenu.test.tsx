import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SignInMenu } from "./SignInMenu";
const { createMemoryHistory } = require("history");
const { Router } = require("react-router-dom");

describe("<SignInMenu/>", () => {
  test("check if  param to login page is sets", async () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <SignInMenu />
      </Router>
    );
    const modalButton = screen.queryByText(/sign in/i);
    await userEvent.click(modalButton);
    const loginButton = screen.queryByText(/sign in to employer panel/i);
    await userEvent.click(loginButton);
    expect(history.location.pathname).toBe("/login");
  });
});
