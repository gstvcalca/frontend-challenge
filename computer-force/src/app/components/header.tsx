"use client"

import { Saira_Stencil_One } from "next/font/google";
import styled from "styled-components"
import { PrimaryInput, PrimaryInputWithSearchIcon } from "./primary-input";
import { CartControl } from "./cart-control";
import { useFilter } from "@/hooks/useFilter";

const saira_one = Saira_Stencil_One({ 
    weight: ['400'],
    subsets: ["latin"] });

const TagHeader = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 12px 24px;
    
    > div {
        display: flex;
        align-items: center;
        gap: 24px;
    }

    @media (min-width: ${props => props.theme.DesktopBreakpoint}){
        padding: 20px 160px;

    }

`

const Logo = styled.a`
    color: var(--logo-color);
    font-weight: 400;
    font-size: 24px;
    line-height: 150%;
    text-decoration: none;

    @media (min-width: ${props => props.theme.DesktopBreakpoint}){
        font-size: 24px;
    }

    @media (min-width: ${props => props.theme.TabletBreakpoint}){
        font-size: 40px;
    }

`

export function Header(){
    const {setSearch, search} = useFilter();
    return (
        <TagHeader>
            <Logo href="/" className={saira_one.className}>Computer Force</Logo>
            <div>
                <PrimaryInputWithSearchIcon 
                    value={search}
                    HandleChange={setSearch}
                    placeholder="Procurando por algo específico?"/>
                <CartControl/>
            </div>
        </TagHeader>
    )
}