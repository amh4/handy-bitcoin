import Menu from "./menu";

describe("Menu", () => {
  it("loads the menu", () => {
    cy.mount(<Menu />);
    cy.get(".btn").should("exist");
    cy.get(".btn").click();
    cy.get(".offcanvas-body > .btn").click();
    cy.get(".modal-body");
  });
});
