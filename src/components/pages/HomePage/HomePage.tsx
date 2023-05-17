'use client';

import React from 'react';
import { TodoList } from '@/components/features/TodoList';

interface IProps {}

export const HomePage: React.FC<IProps> = (props) => {
  return (
    <>
      <TodoList />
    </>
  );
};
