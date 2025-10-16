import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import App from "../App";

// 1st test case
test("check for app text", () => {
  render(<App />);
  // query
  let element = screen.getByTestId("h1-test");
  // assertions
  expect(element.innerHTML).toBe("App");
});
