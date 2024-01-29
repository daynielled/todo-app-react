import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import TodoList from "./TodoList";

function addTodo(todoList, task = "write tests") {
  const taskInput = todoList.getByPlaceholderText("Enter Task");
  fireEvent.change(taskInput, { target: { value: task }});
  const submitButton = todoList.getByText("Add Task!");
  fireEvent.click(submitButton);
}

it("renders without crashing", function() {
  render(<TodoList />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it("can add a todo", function() {
  const list = render(<TodoList />);
  addTodo(list);

  // expect form to clear and todo to be on the page
  expect(list.getByPlaceholderText("Enter Task")).toHaveValue("");
  expect(list.getByText("write tests")).toBeInTheDocument();
  expect(list.getByText("Edit")).toBeInTheDocument();
  expect(list.getByText("Delete")).toBeInTheDocument();
  expect(list.getByText("Mark As Completed")).toBeInTheDocument();
});

  
