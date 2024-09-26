    import styled from "styled-components"
import { ArrowIcon } from "./icons/Arrow-icon"
import { useState } from "react"
import { useFilter } from "@/hooks/useFilter"
import { PriorityType } from "@/types/priority-types"

interface FilterByPriorityProps {

}

const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;

    button {
        border: none;
        background-color: transparent;
        font-family: inherit;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: var(--text-dark);
        
        display: flex;
        align-items: center;
        justify-content: center;
        
        cursor: pointer;

        svg {
            margin-left: 16px;
        }
    }
`

const PriorityFilter = styled.ul`
    position: absolute;
    width: 250px;
    background-color: white;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 12px 16px;
    list-style: none;
    top: 100%;
    right: 8px;

    li {
        color: var(--text-dark);
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        padding-left: 10px;
        cursor: pointer;
    }

    li + li {
        margin-top: 4px;
    }

    li:hover {
        background-color: var(--bg-secondary)
    }

`
export function FilterByPriority(props : FilterByPriorityProps){
    const [isOpen, setisOpen] = useState(false)
    const {setPriority} = useFilter()

    const handleOpen = () => setisOpen(prev => !prev)

    const handleUpdatePriority = (value: PriorityType) => {
        setPriority(value)
        setisOpen(false)
    }

    return(
        <FilterContainer>
            <button onClick={handleOpen}>
                Organizar por
                <ArrowIcon/>
            </button>
            {isOpen && <PriorityFilter>
                <li onClick={() => handleUpdatePriority(PriorityType.NEWS)}>Novidades</li>    
                <li onClick={() => handleUpdatePriority(PriorityType.BIGGEST)}>Preço: maior - menor</li>    
                <li onClick={() => handleUpdatePriority(PriorityType.SMALLEST)}>Preço: menor - maior</li>    
                <li onClick={() => handleUpdatePriority(PriorityType.POPULARITY)}>Mais vendidos</li>    
            </PriorityFilter>}
        </FilterContainer>
    )
}