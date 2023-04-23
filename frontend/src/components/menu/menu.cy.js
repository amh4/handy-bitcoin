import Menu from "./menu";

describe("Menu", () => {
  it("loads the menu", () => {
    cy.mount(<Menu />);
    cy.get(".btn").should("exist");
  });
});
