import ProfitAnimation from "./profitAnimation";

describe("ProfitAnimation", () => {
  it("loads animation on screen", () => {
    cy.mount(<ProfitAnimation />);
    cy.get("#profit-animation").should("exist");
  });
});
