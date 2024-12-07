"use client";

import { ThemeProvider } from "next-themes";

import { ToastProvider } from "./ui/toast/toast";

export function Providers({ children }: WithChildren) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
      <ToastProvider />
    </ThemeProvider>
  );
}
