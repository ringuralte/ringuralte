import React from "react";
import { render, screen } from "@testing-library/react";
import { Header } from "../components/Header";
import Home from "../pages/index";

function startDelete(callback) {
  setTimeout(() => {
    callback && callback();
  }, 3000);
}

/* const firstHeader = "ringu ralte";
* 
* function deletingHeader() {
*   let header = firstHeader;
*   while (header.length !== 0) {
*     setTimeout(() => {
*       header = header.substring(0, header.length - 1);
*     }, 200);
*   }
*   console.log(header);
*   return header;
* }
*  */
describe("Header", () => {
  it("renders header", () => {
    render(<Home />);
    const heading = screen.getByRole("heading", {
      name: /ringu ralte/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it("starts delete header", () => {
    const setStateMock = jest.fn();
    const useStateMock = (useState) => [useState, setStateMock];
    jest.useFakeTimers();
    jest.spyOn(global, "setTimeout");
    jest.spyOn(React, "useEffect").mockImplementation((f) => f());
    jest.spyOn(React, "useState").mockImplementation(useStateMock);

    render(<Header />);

		expect(screen.getByText)

    /* const deleteHeader = require(startDelete); */
	  /* startDelete();
   */
	  /* expect(setTimeout).toHaveBeenCalledTimes(1); */
	  /* expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 3000); */
	  /* expect(setStateMock).toHaveBeenCalledWith(true); */
  });

	/* it("deletes header", () => {
  *   jest.useFakeTimers();
  *   jest.spyOn(global, "setTimeout");
  
  *   const something = deletingHeader();
  *   console.log(something);
  
  *   expect(setTimeout).toHaveBeenCalledTimes(11);
  * }); */
});
