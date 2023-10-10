"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

interface AppLayoutProps {
  children?: React.ReactNode;
}

const queryClient = new QueryClient();

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
