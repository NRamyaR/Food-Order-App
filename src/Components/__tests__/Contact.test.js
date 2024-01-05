import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

//wrap all test cases inside descibe
describe("Contact us page Test cases", () => {
  // beforeAll(() => {
  //   console.log("Before all");
  // });
  // beforeEach(() => {
  //   console.log("Before Each");
  // });
  // afterAll(() => {
  //   console.log("after All");
  // });
  // afterEach(() => {
  //   console.log("after Each");
  // });

  //it or test should we can use
  test("Should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
  });

  it("Should load button inside contact us component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    //Assertion
    expect(button).toBeInTheDocument();
  });

  it("Should load input name inside contact us component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("Name");

    //Assertions
    expect(inputName).toBeInTheDocument();
  });

  it("Should load 2 input boxes on the contact us component", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");
    // console.log(inputBoxes);

    //Assertions
    // expect(inputBoxes.length).not.toBe(3);
    expect(inputBoxes.length).toBe(2);
  });
});
