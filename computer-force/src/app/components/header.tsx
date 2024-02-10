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
    align-items: center;
    justify-content: space-between;
    padding: 20px 160px;

    > div {
        display: flex;
        align-items: center;
        justify-content: center;

        gap: 24px;
    }

`

const Logo = styled.a`
    color: var(--logo-color);
    font-weight: 400;
    font-size: 40px;
    line-height: 150%;

`

export function Header(){
    const {setSearch, search} = useFilter();
    return (
        <TagHeader>
            <Logo className={saira_one.className}>Computer Force</Logo>
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