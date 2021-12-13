describe("Home Page", () => {
  it("Checks for correct header", () => {
    cy.visit("/");
	  /* cy.get("header").contains("ringuralte"); */
		cy.get("h2").contains("About Me")
  });
});
