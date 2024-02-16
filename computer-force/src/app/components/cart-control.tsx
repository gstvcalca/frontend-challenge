import { useLocalStorage } from "@/hooks/useLocalStorage";
import { CartIcon } from "./icons/cart-icon";
import styled from "styled-components";
import { useRouter } from "next/navigation";

const CartCount = styled.span`
    width: 17px;
    height: 17px;
    padding: 0px 4px;

    color: white;
    background-color: var(--delete-color);
    border-radius: 100%;

    margin-left: -10px;
    font-size: 12px;
    vertical-align: bottom;
    `

const CartContainer = styled.button`
    position: relative;
    border: none;
    background-color: transparent;
    cursor: pointer;
`

export function CartControl(){
    const router = useRouter();
    const {value} = useLocalStorage('cart-items', [])
    const handleNavigate = () => {
        router.push('/cart')
    }

    return (
        <CartContainer onClick={handleNavigate}>
            <CartIcon/>
                {value.length > 0 && <CartCount>{value.length}</CartCount>}
        </CartContainer>
    )
}