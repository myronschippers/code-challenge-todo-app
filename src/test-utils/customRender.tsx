import React, { ReactNode, ReactElement } from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import * as theme from '@/theme';

interface ProvidersWrapper {
  children?: ReactNode;
}

// eslint-disable-next-line
function ProvidersWrapper({ children }: ProvidersWrapper) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

function customRender(component: ReactElement, options: any = {}) {
  return render(component, { wrapper: ProvidersWrapper, ...options });
}

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
