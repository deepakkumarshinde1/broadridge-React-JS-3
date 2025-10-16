import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { test, expect, describe, vitest } from "vitest";
import Todo from "../components/Todo";
import api from "../config/api.axios.config";

// api

test("check for api", async () => {
  vitest.mock("../config/api.axios.config");
  let mockData = [
    {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false,
    },
  ];
  api.get.mockResolvedValue({
    data: mockData,
  });
  render(<Todo />);
  await waitFor(() => {
    let element = screen.getAllByTestId("todo-items");
    expect(element).toHaveLength(2);
  });
});

describe("Input and Button", () => {
  test("Check for Input Element", () => {
    render(<Todo />);
    let element = screen.getByTestId("input");
    expect(element).toBeInTheDocument();
  });

  test("Check for Button is invisible as a default", () => {
    render(<Todo />);
    let element = screen.queryByRole("button");
    expect(element).toBeNull();
  });

  test("Check for Button is visible when min 1 char is there in input element", () => {
    render(<Todo />);
    let inputElement = screen.getByTestId("input");
    expect(inputElement).toBeInTheDocument();
    fireEvent.change(inputElement, { target: { value: "a" } });
    let element = screen.getByRole("button");
    expect(element).toBeInTheDocument();
  });
});

describe("list", () => {
  test("check from Todo list element", () => {
    render(<Todo />);
    let element = screen.getByTestId("list");
    expect(element).toBeInTheDocument();
  });

  test("check for todo on todo save", async () => {
    render(<Todo />);
    let element = screen.getByTestId("list");
    expect(element).toBeInTheDocument();
    let inputElement = screen.getByTestId("input");
    expect(inputElement).toBeInTheDocument();

    for (let i = 0; i < 3; i++) {
      fireEvent.change(inputElement, { target: { value: "a" } });
      let buttonElement = screen.queryByRole("button");
      fireEvent.click(buttonElement);
    }

    await waitFor(() => {
      let afterAddListElement = screen.getByTestId("list");
      expect(afterAddListElement.childNodes.length).toBe(3);
    });
  });
});
