'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';

function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <div className="h-full w-full bg-white">
        <div className="bg-white h-full flex justify-center flex-col w-full">
          {children}
        </div>
      </div>
    </NextThemesProvider>
  );
}

export default ThemeProvider;
