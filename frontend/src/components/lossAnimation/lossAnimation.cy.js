import LossAnimation from "./lossAnimation";

describe("LossAnimation", () => {
  it("loads animation on screen", () => {
    cy.mount(<LossAnimation />);
    cy.get("#loss-animation").should("exist");
  });
});
