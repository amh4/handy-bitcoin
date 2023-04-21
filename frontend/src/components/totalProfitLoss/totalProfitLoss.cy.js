import TotalProfitLoss from "./totalProfitLoss";

describe("TotalProfitLoss", () => {
  it("loads the component displaying unchanged balance", () => {
    cy.mount(<TotalProfitLoss />);
    cy.get("#total-profit-loss-headline").contains("Total Profit/Loss: $0");
  });

  it("loads the component displaying a positive balance if trade is a winner", () => {
    cy.mount(<TotalProfitLoss profitLoss={2000} />);
    cy.get("#total-profit-loss-headline").contains("Total Profit/Loss: $2,000");
  });

  it("loads the component displaying a negative balance if trade is a loser", () => {
    cy.mount(<TotalProfitLoss profitLoss={-2000} />);
    cy.get("#total-profit-loss-headline").contains(
      "Total Profit/Loss: $-2,000"
    );
  });

  it("totals up subsquent profit/losses", () => {
    cy.mount(<TotalProfitLoss profitLoss={-2000} />);
    cy.get("#total-profit-loss-headline").contains(
      "Total Profit/Loss: $-2,000"
    );
    cy.mount(<TotalProfitLoss profitLoss={-1000} />);
    cy.get("#total-profit-loss-headline").contains(
      "Total Profit/Loss: $-3,000"
    );
  });
});
