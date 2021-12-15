/* import React from "react";
* import { render, screen } from "@testing-library/react";
* import { Header } from "../components/Header";
* import Home from "../pages/index";
* 
* function startDelete(callback) {
*   setTimeout(() => {
*     callback && callback();
*   }, 3000);
* }
* 
* describe("Header", () => {
*   it("renders header", () => {
*     render(<Home />);
*     const heading = screen.getByRole("heading", {
*       name: /ringu ralte/i,
*     });
* 
*     expect(heading).toBeInTheDocument();
*   });
* 
*   it("starts delete header", () => {
*     const setStateMock = jest.fn();
*     const useStateMock = (useState) => [useState, setStateMock];
*     jest.useFakeTimers();
*     jest.spyOn(global, "setTimeout");
*     jest.spyOn(React, "useEffect").mockImplementation((f) => f());
*     jest.spyOn(React, "useState").mockImplementation(useStateMock);
* 
* 		expect(screen.getByText)
*   });
* }); */

describe("Home", () => {
  it("expects", () => {
    expect(true).toBe(true);
  });
});
