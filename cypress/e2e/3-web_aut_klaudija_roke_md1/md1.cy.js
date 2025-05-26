describe("Selectable Grid Test", () => {
  beforeEach(() => {
    cy.visit("https://demoqa.com/selectable");
    cy.contains("Grid").click();
  });

  it("highlighting even numbers", () => {
    const toSelect = ["Two", "Four", "Six", "Eight"];
    const notSelected = ["One", "Three", "Five", "Seven", "Nine"];

    toSelect.forEach(item => {
      cy.contains(".list-group-item", item).click();
    });

    toSelect.forEach(item => {
      cy.contains(".list-group-item", item).should("have.class", "active");
    });

    notSelected.forEach(item => {
      cy.contains(".list-group-item", item).should("not.have.class", "active");
    });
  });
});