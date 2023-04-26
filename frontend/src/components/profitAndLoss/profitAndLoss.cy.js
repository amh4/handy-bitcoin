import ProfitAndLoss from "./profitAndLoss";

describe("ProfitAndLoss", () => {
  it("loads the component and displays $0 when no trade is live", () => {
    cy.mount(<ProfitAndLoss />);
    cy.get("#profit-loss-label").should("have.text", "Profit/Loss:");
    cy.get("#profit-loss-amount").should("have.text", "$0");
  });

  it("loads the component and displays the profit when a is live and in profit", () => {
    cy.mount(
      <ProfitAndLoss
        startingPrice={30000}
        currentPrice={32000}
        tradeActive={true}
      />
    );
    cy.get("#profit-loss-label").should("have.text", "Profit/Loss:");
    cy.get("#profit-loss-amount").contains("$200000");
  });

  it("loads the component and displays the loss when a is live and in loss", () => {
    cy.mount(<ProfitAndLoss startingPrice={30000} currentPrice={29000} />);
    cy.get("#profit-loss-label").should("have.text", "Profit/Loss:");
    cy.get("#profit-loss-amount").contains("$-100000");
  });
});
