import ProfitAndLoss from "./profitAndLoss";

describe("ProfitAndLoss", () => {
  it("loads the component and displays $0 when no trade is live", () => {
    cy.mount(<ProfitAndLoss />);
    cy.get("#profit-loss-container").should("have.text", "Profit/Loss: $0");
  });

  it("loads the component and displays $0 when no trade is live", () => {
    cy.mount(<ProfitAndLoss startingPrice={0} currentPrice={0} />);
    cy.get("#profit-loss-container").should("have.text", "Profit/Loss: $0");
  });

  it("loads the component and displays the profit when a is live and in profit", () => {
    cy.mount(<ProfitAndLoss startingPrice={30000} currentPrice={32000} />);
    cy.get("#profit-loss-container").should("have.text", "Profit/Loss: $2,000");
  });

  it("loads the component and displays the loss when a is live and in loss", () => {
    cy.mount(<ProfitAndLoss startingPrice={30000} currentPrice={29000} />);
    cy.get("#profit-loss-container").should(
      "have.text",
      "Profit/Loss: $-1,000"
    );
  });
});
