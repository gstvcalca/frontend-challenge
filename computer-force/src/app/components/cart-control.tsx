import { useLocalStorage } from "@/hooks/useLocalStorage";
import { CartIcon } from "./icons/cart-icon";
import styled from "styled-components";

const CartCount = styled.span`
    width: 17px;
    height: 17px;
    padding: 0px 5px;

    color: white;
    background-color: var(--delete-color);
    border-radius: 100%;

    margin-left: -10px;
    font-size: 12px;
    vertical-align: bottom;
    `

const CartContainer = styled.div`
    position: relative;
`

export function CartControl(){
    const {value} = useLocalStorage('cart-items', [])

    return (
        <CartContainer>
            <CartIcon/>
                {value.length > 0 && <CartCount>{value.length}</CartCount>}
        </CartContainer>
    )
}