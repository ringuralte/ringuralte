describe("Resume header", () => {
  beforeEach(() => {
    cy.visit("/resume");
  });

  it("Loads name, job title and small info", () => {
    cy.get("h1").contains("Lalringzuala");
    cy.get("h2").contains("Software Developer");
  });

  it("Loads correct info", () => {
    cy.get("[data-cy=email] > a")
      .should("have.text", "ringuralte@protonmail.com")
      .invoke("attr", "href")
      .should("eq", "mailto:ringuralte@protonmail.com");
    cy.get("[data-cy=phone] > a")
      .should("have.text", "(+91) 9650657715")
      .invoke("attr", "href")
      .should("eq", "tel: +919650657715");
    cy.get("[data-cy=address] > a")
      .should("have.text", "Lengpui, Mizoram")
      .should("have.attr", "href");
    cy.get("[data-cy=github] > a")
      .should("have.text", "github.com/ringuralte")
      .invoke("attr", "href")
      .should("eq", "https://github.com/ringuralte");
    cy.get("[data-cy=website] > a")
      .should("have.text", "ringuralte.dev")
      .invoke("attr", "href")
      .should("eq", "https://ringuralte.dev");
  });
});
