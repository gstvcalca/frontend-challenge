"use client"

import { UseProducts } from "@/hooks/useProducts"
import { ProductCard } from "./product-card";
import styled from "styled-components";

const ListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 256px);
    gap: 32px;
    justify-content: space-between;
    max-width: 100%;

    margin-top: 32px;
`

export function ProductsList(){
    const {data} = UseProducts();
    console.log(data)
    return(
        <ListContainer>
            {data?.map(product => <ProductCard 
                key={product.id}
                title={product.name}
                price={product.price_in_cents}
                image={product.image_url}
                id={product.id}
            />)}
        </ListContainer>
    )
}