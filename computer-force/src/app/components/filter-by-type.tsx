"use client"

import { useFilter } from "@/hooks/useFilter"
import { FilterType } from "@/types/filter-types"
import styled from "styled-components"

interface FilterByTypeProps {

}

interface FilterItemProps {
    selected: boolean
}

const FilterItem = styled.li<FilterItemProps>`
    font-family: inherit;
    font-weight: ${props => props.selected ? '600' : '400'};
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    text-transform: uppercase;
    color: var(--text-dark);
    cursor: pointer;

    border-bottom: ${props => props.selected ? '4px solid var(--orange-low)' : ''}
`

const FilterList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: left;
    list-style: none;
    gap: 40px;


`

export function FilterByType(props: FilterByTypeProps){
    const {type, setType} = useFilter();

    const handleChangeType = (value: FilterType) => {
        setType(value)
    }
    return (
        <FilterList>
            <FilterItem 
                selected={type === FilterType.ALL} 
                onClick={() => handleChangeType(FilterType.ALL)}
            >Todos os produtos</FilterItem>
            <FilterItem 
                selected={type === FilterType.SHIRT} 
                onClick={() => handleChangeType(FilterType.SHIRT)}
            >Camisetas</FilterItem>
            <FilterItem 
                selected={type === FilterType.MUG} 
                onClick={() => handleChangeType(FilterType.MUG)}
            >canecas</FilterItem>
        </FilterList>
    )
}