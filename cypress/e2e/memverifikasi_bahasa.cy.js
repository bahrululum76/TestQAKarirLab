// memverifikasi bahasa dengan nilai teksnya
describe("Verify Language on Wikipedia", () => {
  it("Verifies language with text value", () => {
    cy.visit("https://www.wikipedia.org/");
    cy.contains("日本語").should("be.visible");
    cy.contains("Français").should("be.visible");
    cy.contains("Italiano").should("be.visible");
    cy.contains("فارسی").should("be.visible");
    cy.contains("Polski").should("be.visible");
    cy.contains("中文").should("be.visible");
    cy.contains("Español").should("be.visible");
    cy.contains("Deutsch").should("be.visible");
    cy.contains("Русский").should("be.visible");
  });
});
