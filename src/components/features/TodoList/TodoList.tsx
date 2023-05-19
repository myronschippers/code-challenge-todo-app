'use client';

import React, { useState, ChangeEvent } from 'react';
import { CompletionList } from '@/components/ui/CompletionList';
import { Paper } from '@/components/ui/Paper';
import { PaperInput } from '@/components/ui/PaperInput';
import { TodosService, ITodoItem } from '@/data/Todos';
import { StyledTodoListContainer } from './styles';
import { ITodoListProps } from './types';

export const TodoList: React.FC<ITodoListProps> = ({ children }) => {
  const [todoList, setTodoList] = useState<ITodoItem[]>(TodosService.getList);
  const [newTodo, setNewTodo] = useState<string | null>(null);

  const handleRemoveTodo = async (todoId: number) => {
    const newTodoList = await TodosService.removeTodo(todoId);

    setTodoList(newTodoList);
  };

  const handleToggleCompleted = async (todoId: number) => {
    const newTodoList = await TodosService.toggleCompletion(todoId);

    setTodoList(newTodoList);
  };

  const onNewTodoInputChange = (inputEvent: ChangeEvent<HTMLInputElement>) => {
    const newTodoValue = inputEvent.target.value;

    setNewTodo(newTodoValue);
  };

  const onSubmitTodo = async () => {
    if (!newTodo) {
      return;
    }

    const newTodoList = await TodosService.addTodo(newTodo);

    setTodoList(newTodoList);
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
