import { render, screen } from "@testing-library/react";
import { MdComputer } from "react-icons/md";
import userEvent from "@testing-library/user-event";
import { StackButton } from "../../../shared/StackButton";
import { BrowserRouter } from "react-router-dom";

const mockStackIcon = {
  _id: "01",
  stack: "CSS",
  stackFullName: "CSS",
  background: "linear-gradient(-90deg, rgb(236, 76, 182), rgb(212, 75, 213));",
  logo: <MdComputer />,
  url: "https://justjoin.it/static/media/other.c34be08c.svg",
};
describe("Icon Container component", () => {
  test("check if tech stack param sets", async () => {
    //Arrange

    const searchParams = { stackName: mockStackIcon.stack };

    const mockSetSearchParams = jest.mock("react-router-dom", () => ({
      ...(jest.requireActual("react-router-dom") as object),
      useSearchParams: () => [searchParams],
    }));

    render(
      <BrowserRouter>
        <StackButton logo={mockStackIcon.logo} stack={mockStackIcon.stack} />
      </BrowserRouter>
    );
    //Act
    const logoButton = screen.getByRole("button");
    userEvent.click(logoButton);
    //Assert
    expect(window.location.pathname).toHaveTextContent(/stackName=CSS/);
  });
});
