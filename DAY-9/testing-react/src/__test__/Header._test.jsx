import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Header from "../components/Header";

describe("Header Check", () => {
  test("Check Header Element", () => {
    render(<Header title="Hello" />);
    let element = screen.getByTestId("todo-header");
    expect(element).toBeInTheDocument();
  });

  test("Check Header Props Value", () => {
    render(<Header title="Hello" />);
    let element = screen.getByTestId("todo-header");
    expect(element.innerHTML).toContain("HELLO");
  });

  test("Check Header Element is h1", () => {
    render(<Header title="Hello" />);
    let element = screen.getByTestId("todo-header");
    expect(element.nodeName).toContain("H1");
  });
});
