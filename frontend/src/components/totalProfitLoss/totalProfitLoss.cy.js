import TotalProfitLoss from "./totalProfitLoss";

describe("TotalProfitLoss", () => {
  it("loads the component displaying unchanged balance", () => {
    cy.mount(<TotalProfitLoss />);
    cy.get("#total-profit-loss-headline").contain("Total Profit/Loss: $0");
  });
});
