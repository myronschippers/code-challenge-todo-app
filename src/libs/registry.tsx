'use client';

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Wrapper } from '../components/templates/Wrapper';
import { GlobalStyles } from '../theme/GlobalStyles';
import * as theme from '../theme';

export default function StyledComponentsRegistry({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <main>
        <Wrapper>{children}</Wrapper>
      </main>
    </ThemeProvider>
  );
}
