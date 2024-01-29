import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Todo from './Todo';

test('renders Todo component', () => {
  render(<Todo id="1" task="Sample Task" completed={false} removeTodo={() => {}} updateTodo={() => {}} />);
  const todoElement = screen.getByText('Sample Task');
  expect(todoElement).toBeInTheDocument();
});

test('calls removeTodo when delete button is clicked', () => {
  const removeTodoMock = jest.fn();
  render(<Todo id="1" task="Sample Task" completed={false} removeTodo={removeTodoMock} updateTodo={() => {}} />);
  const deleteButton = screen.getByText('Delete');
  fireEvent.click(deleteButton);
  expect(removeTodoMock).toHaveBeenCalledWith('1');
});




