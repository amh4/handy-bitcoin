import UserTutorial from "./userTutorial";

describe("UserTutorial", () => {
  it("loads the carousel on the screen", () => {
    cy.mount(<UserTutorial />);
    cy.get("#user-tutorial").should("exist");
  });

  it("first image of user sat in front of screen loads with title and text", () => {
    cy.mount(<UserTutorial />);
    cy.get("#user-img")
      .should("be.visible")
      .and(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0);
      });
    cy.get("#first-image-caption").should("exist");
    cy.get("#first-image-caption").should("have.text", "Step 1");
    cy.get("#first-image-instructions").should(
      "have.text",
      "Sit facing your webcam"
    );
  });

  it("second image of hand raised to open trade loads with title and text", () => {
    cy.mount(<UserTutorial />);
    cy.get("#open-trade-img").should("exist");
    cy.get(".active > .carousel-caption > #second-image-instructions").should(
      "have.text",
      "Raise your hand with an open palm to place a trade"
    );
    cy.get(".active > .carousel-caption > #second-image-caption").should(
      "have.text",
      "Step 2"
    );
  });

  it("third image of hand raised to closed trade loads with title and text", () => {
    cy.mount(<UserTutorial />);
    cy.get("#close-trade-img").should("exist");
    cy.get(".active > .carousel-caption > #third-image-instructions").should(
      "have.text",
      "Raise your hand with a closed fist to close a trade"
    );
    cy.get(".active > .carousel-caption > #third-image-caption").should(
      "have.text",
      "Step 3"
    );
  });
});
