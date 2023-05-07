'use client';

import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../theme/GlobalStyles';
import * as theme from '../theme';

export default function StyledComponentsRegistry({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <GlobalStyles />
      </Head>
      {children}
    </ThemeProvider>
  );
}
