import styled from "styled-components"
import { SearchIcon } from "./icons/search-icon"
import { InputHTMLAttributes } from "react"

export const PrimaryInput = styled.input`
    width: 352px;
    border-radius: 8px;
    padding: 10px 16px;

    
    background-color: var(--bg-secondary);
    border-style: none;

    font-family: inherit;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: var(--text-dark)
`
const InputContainer = styled.div`

    position: relative;
    width: 352px;

    svg {
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);

    }
`

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    value: string,
    HandleChange: (value: string) => void
}

export function PrimaryInputWithSearchIcon(props: InputProps){
    return (
        <InputContainer>
            <PrimaryInput onChange={(event) => props.HandleChange(event.target.value)}{...props}/>
            <SearchIcon/>
        </InputContainer>
    )
}