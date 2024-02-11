"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FilterContextProvider } from "../context/filter-context";
import { ThemeProvider } from "styled-components";
import { ReactNode } from "react";

interface DefaultProvidersProps {
    children: ReactNode
}

const theme = {
    DesktopBreakpoint: "1068px",
    TabletBreakpoint: "768px"
}
export function DefaultProviders({children} : DefaultProvidersProps){
    const client = new QueryClient();

    return(
            <QueryClientProvider client={client}>
                <FilterContextProvider>
                    <ThemeProvider theme={theme}>
                        {children}
                    </ThemeProvider>
                </FilterContextProvider>
            </QueryClientProvider>
    )
}