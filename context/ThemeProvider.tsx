'use client'

import { FC, ReactNode } from "react"
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

interface IThemeProvider extends ThemeProviderProps {
  children: ReactNode;
};

const ThemeProvider: FC<IThemeProvider> = ({ children, ...props }) => {

  return (
    <NextThemeProvider {...props}>
      {children}
    </NextThemeProvider>
  )
}

export default ThemeProvider;