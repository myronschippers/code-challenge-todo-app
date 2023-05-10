'use client';

import React from 'react';
import { DesignOverlay } from '../../ui/DesignOverlay';

interface IProps {}

export const HomePage: React.FC<IProps> = (props) => {
  return (
    <div>
      <DesignOverlay />
      <h1>TODO</h1>
    </div>
  );
};
