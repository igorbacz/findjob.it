import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MdComputer } from "react-icons/md";
import { IconContainer } from "./IconContainer";
const { createMemoryHistory } = require("history");
const { Router } = require("react-router-dom");

const mockStackIcon = {
  _id: "01",
  stack: "CSS",
  stackFullName: "CSS",
  background: "linear-gradient(-90deg, rgb(236, 76, 182), rgb(212, 75, 213));",
  logo: <MdComputer />,
  url: "https://justjoin.it/static/media/other.c34be08c.svg",
};

describe("<IconContainer/>", () => {
  test("check if tech stack param sets", async () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <IconContainer logo={mockStackIcon.logo} stack={mockStackIcon.stack} />
      </Router>
    );
    const logoButton = screen.queryByText(/CSS/);
    await userEvent.click(logoButton);
    waitFor(() => expect(history.location.pathname).toBe("/?techStack=CSS"));
  });
});
