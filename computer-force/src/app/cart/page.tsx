"use client"

import styled from "styled-components"
import { GoBackButton } from "../components/go-back-button"
import { useLocalStorage } from "@/hooks/useLocalStorage"
import { ProductInCart } from "@/types/product"
import { FormatPrice } from "../utils/format-price"
import { CartItem } from "../components/cart/cart-item"
import { CartControl } from './../components/cart-control';
import { Divider } from "../components/divider"
import { useRouter } from "next/navigation"


const Container = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: start;
`
const CartList = styled.ul`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 16px;
    margin-top: 24px;

`
const CartListContainer = styled.div`

h3 {
        color: var(--text-dark-2);
        font-size: 24px;
        font-weight: 500;
        line-height: 150%;
        margin-top: 24px;
        text-transform: uppercase;
}

    p {
        font-weight: 300;
        font-size: 16px;
        line-height: 150%;
        color: var(--text-dark-2);

        span {
            font-weight: 600;
        }
    }
`
const ResultContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 50%;
    height: 100%;
    padding: 12px;
    margin: 24px;

    h3 {
        text-transform: uppercase;
        margin-bottom: 24px;
    }

    p {
        margin: 12px 0;
    }
`
const ResultItem = styled.div<{isBold: boolean}>`
    display: flex;
    justify-content: space-between;
    width: 100%;

    font-weight: ${props => props.isBold ? '600' : '400'};
    font-size: 16px;
    line-height: 150%;

    margin-bottom: 12px;  
`
const ShopBtn = styled.button`
    color: white;
    border-radius: 4px;
    background-color: var(--success-color);
    padding: 12px;
    width: 100%;
    border: none;
    margin-top: 40px;
    cursor: pointer;
`
export default function CartPage(){
    const {value, updateLocalStorage} = useLocalStorage<ProductInCart[]>('cart-items', [])
    const calculateTotal = (value: ProductInCart[]) => {
        return value.reduce((sum, item) => sum += (item.price_in_cents * item.quantity), 0)
    }
    const CartTotal = FormatPrice(calculateTotal(value))

    const handleUpdateQuantity = (id: string, quantity: number) => {
        const newValue = value.map(item => {
            if (item.id !== id) return item
            return {...item, quantity: quantity}
        })

        updateLocalStorage(newValue);
    }

    const deleteItem = (id: string) => {
        const newValue = value.filter(item => {
            if (item.id !== id) return item
        })
        console.log('deleting item' + id)
        updateLocalStorage(newValue);
    }

    const deliveryFee = 4000;

    const router = useRouter();

    const handleNavigation = () => {
        router.push('/')
    }
    
    return(
        <Container>
            <CartListContainer>
            <GoBackButton navigate="/"/>
                <h3>Seu carrinho</h3>
                <p>
                    Total ({value.length} produtos)
                    <span> {CartTotal}</span>
                </p>
                <CartList>
                    {value.map(item => <CartItem 
                    product={item} 
                    key={item.id} 
                    handleUpdateQuantity={handleUpdateQuantity}
                    deleteItem={deleteItem}
                    />)}
                </CartList>
            </CartListContainer>
            <ResultContainer>
                <h3>Resumo do pedido</h3>
                <ResultItem isBold={false}>
                    <p>Subtotal dos produtos</p>
                    <p>{CartTotal}</p>
                </ResultItem>
                <ResultItem isBold={false}>
                    <p>Valor do frete</p>
                    <p>{FormatPrice(deliveryFee)}</p>
                </ResultItem>
                <Divider/>
                <ResultItem isBold>
                        <p>Valor total</p>
                        <p>{FormatPrice(calculateTotal(value) + deliveryFee)}</p>
                </ResultItem>
                <ShopBtn onClick={handleNavigation}>Finalizar compra</ShopBtn>
            </ResultContainer>
        </Container>
    )
}