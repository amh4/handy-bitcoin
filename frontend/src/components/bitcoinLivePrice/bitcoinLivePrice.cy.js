import BitcoinLivePrice from "./bitcoinLivePrice";

describe("BitcoinLivePrice", () => {
  it("loads the Bitcoin logo on the component", () => {
    cy.mount(<BitcoinLivePrice />);
    cy.get("#bitcoin-logo")
      .should("exist")
      .and(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0);
      });
  });

  it("displays the current price from the api", () => {
    cy.mount(<BitcoinLivePrice />);
    cy.get("#live-price-label").contains("Live Price:");
  });
});
