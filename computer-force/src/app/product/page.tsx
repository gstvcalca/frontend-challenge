"use client"

import styled from "styled-components"
import { GoBackButton } from './../components/go-back-button';
import { Product } from './../../types/product';
import { useProduct } from "@/hooks/useProduct";
import { FormatPrice } from './../utils/format-price';
import { CartIconWhite } from "../components/icons/cart-icon-white";

const Container = styled.div `
    display: flex;
    align-items: flex-start;
    justify-content: center;    
    flex-direction: column;

    section {
        display: flex;
        justify-content: center;
        width: 100%;
        gap: 32px;
        margin-top: 24px;

        > div {
        display: flex;
        justify-content: space-between;
        flex-direction: column;

            button {
                text-transform: uppercase;
                background: #115d8c;
                mix-blend-mode: multiply;
                border-radius: 4px;
                color: white;
                border: none;
                cursor: pointer;
                padding: 10px 0;
                text-align: center;
                font-size: 16px;
                font-weight: 500;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
                max-width: 448px;
            }
        }
    }

    img {
        max-width: 640px;
        width: 50%;
    }

`
const ProductInfo = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    span {
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        color: var(--text-dark-2);
    }

    h2 {
        font-weight: 300;
        font-size: 32px;
        line-height: 150%;
        color: var(--text-dark-2);
        margin-top: 12px;
    }

    span:nth-of-type(2){
        font-size: 20px;
        font-weight: 600;
        color: var(--shapes-dark);
        margin-bottom: 24px;
    }

    p {
        font-weight: 400;
        font-size: 12px;
        color: var(--text-dark-2)
    }

    div {
        margin-top: 50px;
        h3 {
            text-transform: uppercase;
            color: var(--text-dark);
            font-weight: 500;
            font-size: 16px;
        }

        p {
            font-size: 14px;
        }
    }
`


export default function Product({searchParams}: {searchParams: {id: string}}){
    const {data} = useProduct(searchParams.id)
    const handleAddToCart = () => {
        let CartString = localStorage.getItem('cart-items')
        if (CartString) {
            let CartArray = JSON.parse(CartString);
            
            let existingProduct = CartArray.findIndex((item: { id: string; }) => item.id === searchParams.id);

            if(existingProduct != -1){
                CartArray[existingProduct].quantity += 1;
            } else {
                CartArray.push({...data, quantity: 1, id: searchParams.id})
            }

            localStorage.setItem('cart-items', JSON.stringify(CartArray))
        } else {
            const newCart = [{
                    ...data,
                    id: searchParams.id,
                    quantity: 1}]
            localStorage.setItem('cart-items', JSON.stringify(newCart))
        }
    }
    return(
        <Container>
            <GoBackButton navigate='/'/>
            <section>
                <img src={data?.image_url}/>
                <div>
                    <ProductInfo>
                        <span>{data?.category}</span>
                        <h2>{data?.name}</h2>
                        <span>{FormatPrice(data?.price_in_cents ?? 0)}</span>
                        <p>*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.</p>
                        <div>
                            <h3>Descrição</h3>
                            <p>{data?.description}</p>
                        </div>
                    </ProductInfo>
                    <button onClick={handleAddToCart}>
                        <CartIconWhite/>
                        Adicionar ao carrinho</button>
                </div>
            </section>
        </Container>
    )
}