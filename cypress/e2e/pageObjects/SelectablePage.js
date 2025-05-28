
export class SelectablePage {
  static visit() {
    cy.visit("https://demoqa.com/selectable");
}

    static clickGridTab() {
    cy.contains("Grid").click();
  }

    static clickItem(itemText) {
    cy.contains(".list-group-item", itemText).click();
  }

    static shouldBeActive(itemText) {
    cy.contains(".list-group-item", itemText).should("have.class", "active");
  }

    static shouldNotBeActive(itemText) {
    cy.contains(".list-group-item", itemText).should("not.have.class", "active");
  }

}