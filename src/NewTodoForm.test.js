import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NewTodoForm from './NewTodoForm';

it("renders without crashing", function() {
    render(<NewTodoForm />);
  });
  
  it("matches snapshot", function() {
    const { asFragment } = render(<NewTodoForm />);
    expect(asFragment()).toMatchSnapshot();
  }); 
  
test('renders NewTodoForm component', () => {
  render(<NewTodoForm addNewTodo={() => {}} />);
  const inputElement = screen.getByPlaceholderText('Enter Task');
  expect(inputElement).toBeInTheDocument();
});

test('calls addNewTodo when form is submitted', () => {
  const addNewTodoMock = jest.fn();
  render(<NewTodoForm addNewTodo={addNewTodoMock} />);
  const inputElement = screen.getByPlaceholderText('Enter Task');
  fireEvent.change(inputElement, { target: { value: 'New Task' } });
  const addButton = screen.getByText('Add Task!');
  fireEvent.click(addButton);
  expect(addNewTodoMock).toHaveBeenCalledWith({ id: expect.any(String), task: 'New Task' });
});