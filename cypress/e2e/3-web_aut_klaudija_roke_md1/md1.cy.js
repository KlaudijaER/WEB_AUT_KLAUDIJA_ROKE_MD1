import { SelectablePage } from "../pageObjects/SelectablePage";

describe("Selectable Grid Test", () => {
  beforeEach(() => {
    SelectablePage.visit();
    SelectablePage.clickGridTab();
  });

  it("highlighting even numbers", () => {
    SelectablePage.clickItem("Two");
    SelectablePage.clickItem("Four");
    SelectablePage.clickItem("Six");
    SelectablePage.clickItem("Eight");

    // Check that the selected ones are active
    SelectablePage.shouldBeActive("Two");
    SelectablePage.shouldBeActive("Four");
    SelectablePage.shouldBeActive("Six");
    SelectablePage.shouldBeActive("Eight");

    // Check that the others are not active
    SelectablePage.shouldNotBeActive("One");
    SelectablePage.shouldNotBeActive("Three");
    SelectablePage.shouldNotBeActive("Five");
    SelectablePage.shouldNotBeActive("Seven");
    SelectablePage.shouldNotBeActive("Nine");
  });
});