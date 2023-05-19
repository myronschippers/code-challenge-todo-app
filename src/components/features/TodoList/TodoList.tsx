'use client';

import React, { useState, ChangeEvent } from 'react';
import { CompletionList } from '@/components/ui/CompletionList';
import { Paper } from '@/components/ui/Paper';
import { PaperInput } from '@/components/ui/PaperInput';
import { MOCK_TODO_LIST } from './TodoList.constants';
import { StyledTodoListContainer } from './styles';
import { ITodoListProps, ITodoItem } from './types';

export const TodoList: React.FC<ITodoListProps> = ({ children }) => {
  const [todoList, setTodoList] = useState<ITodoItem[]>(MOCK_TODO_LIST);
  const [newTodo, setNewTodo] = useState<string | null>(null);

  const handleRemoveTodo = (todoId: number) => {
    const newTodoList = todoList.filter((todoItem) => todoItem.id !== todoId);

    setTodoList(newTodoList);
  };

  const handleToggleCompleted = (todoId: number) => {
    const newTodoList = todoList.map((todoItem) => {
      if (todoItem.id === todoId) {
        return {
          ...todoItem,
          completed: !todoItem.completed,
        };
      }

      return todoItem;
    });

    setTodoList(newTodoList);
  };

  const onNewTodoInputChange = (inputEvent: ChangeEvent<HTMLInputElement>) => {
    const newTodoValue = inputEvent.target.value;

    setNewTodo(newTodoValue);
  };

  const onSubmitTodo = () => {
    if (!newTodo) {
      return;
    }

    setTodoList([
      ...todoList,
      {
        id: 100 + todoList.length + 1,
        text: newTodo,
        completed: false,
        createdAt: new Date(),
      },
    ]);

    setNewTodo('');
  };

  return (
    <StyledTodoListContainer>
      <PaperInput
        placeholder="Create a new todo..."
        onChange={onNewTodoInputChange}
        onKeyEnter={onSubmitTodo}
        value={!newTodo ? '' : newTodo}
      />

      <Paper>
        <CompletionList
          list={todoList}
          removeItemCallback={handleRemoveTodo}
          toggleCompletedForItemCallback={handleToggleCompleted}
        />
      </Paper>
    </StyledTodoListContainer>
  );
};
