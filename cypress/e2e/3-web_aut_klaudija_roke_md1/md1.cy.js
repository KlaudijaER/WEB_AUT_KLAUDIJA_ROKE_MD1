import { SelectablePage } from "../pageObjects/SelectablePage";

describe("Selectable Grid Test", () => {
  beforeEach(() => {
    SelectablePage.visit();
    SelectablePage.clickGridTab();
  });

  it("highlighting even numbers", () => {
    const toSelect = ["Two", "Four", "Six", "Eight"];
    const notSelected = ["One", "Three", "Five", "Seven", "Nine"];

    toSelect.forEach(item => {
      SelectablePage.clickItem(item);
    });

    toSelect.forEach(item => {
      SelectablePage.shouldBeActive(item);
    });

    notSelected.forEach(item => {
      SelectablePage.shouldNotBeActive(item);
    });
  });
});