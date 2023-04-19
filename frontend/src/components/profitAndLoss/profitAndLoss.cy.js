import ProfitAndLoss from "./profitAndLoss";

describe("ProfitAndLoss", () => {
  it("loads the component and displays $0 when no trade is live", () => {
    cy.mount(<ProfitAndLoss />);
    cy.get("#profit-loss-container").should("have.text", "Profit/Loss: $0");
  });
});
