'use client';

import React, { useState } from 'react';
import { CompletionList } from '@/components/ui/CompletionList';
import { Paper } from '@/components/ui/Paper';
import { MOCK_TODO_LIST } from './TodoList.constants';
import { StyledTodoListContainer } from './styles';
import { ITodoListProps, ITodoItem } from './types';

export const TodoList: React.FC<ITodoListProps> = ({ children }) => {
  const [todoList, setTodoList] = useState<ITodoItem[]>(MOCK_TODO_LIST);

  return (
    <StyledTodoListContainer>
      <Paper>Paper</Paper>

      <Paper>
        <CompletionList list={todoList} />
      </Paper>
    </StyledTodoListContainer>
  );
};
