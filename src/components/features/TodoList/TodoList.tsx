'use client';

import React, { useState } from 'react';
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
        {todoList.map((todoItem, itemIndex) => (
          <div key={itemIndex}>{todoItem.text}</div>
        ))}
      </Paper>
    </StyledTodoListContainer>
  );
};
