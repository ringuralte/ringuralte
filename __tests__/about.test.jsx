import { render } from "@testing-library/react";
import { AboutMe } from "../components/AboutMe";
import Home from "../pages/index";

describe("About me", () => {
  it("Loads component", () => {
    render(<Home />);
    expect(<AboutMe />).toHaveBeenCalled();
  });
});
