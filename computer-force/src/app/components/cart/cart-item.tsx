import { ProductInCart } from "@/types/product"
import styled from "styled-components"
import { FormatPrice } from './../../utils/format-price';
import { ChangeEvent } from "react";
import { DeleteIcon } from "../icons/delete-icon";

interface CartItemProps {
    product: ProductInCart,
    handleUpdateQuantity(id: string, quantity: number): void,
    deleteItem(id: string): void
}

interface DeleteIcon{
    deleteItem(id: string): void
}

const Item = styled.li`
    display: flex;;
    justify-content: flex-start;
    height: 210px;
    border-radius: 8px;
    background-color: white;
    
    img {
        max-height: 100%;
        border-radius: 8px 0 0 8px;
    }

    > div {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        flex-direction: column;
        flex-grow: 1;
        padding: 16px 24px;
        line-height: 150%;
        color: var(--text-dark-2);

        h4 {
            font-weight: 300;
            font-size: 20px;
            justify-content: space-between;
            width: 100%;
            display: flex;

            button {
                background-color: transparent;
                border: none;
                cursor: pointer;
            }
        }

        p {
            font-weight: 400;
            font-size: 12px;    
            max-width: 100%;
            overflow: hidden;
            text-overflow: ellipsis; 
        }
        
        div {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;    
            span {
                font-weight: 600;
                font-size: 16px;
                color: var(--shapes-dark);
            }
        }
    }
`

const SelectQuantity = styled.select`
    padding: 8px;
    border: 1px solid var(--text-dart);
    border-radius: 8px;
    background-color: var(--bg-secondary);
    color: var(--text-dark);
    font-size: 16px;
    font-weight: 400;
    border-color: var(--border-color);
`

export function CartItem({product, handleUpdateQuantity, deleteItem} : CartItemProps){
    const handleChangeQuantity = (e: ChangeEvent<HTMLSelectElement>) => {
        handleUpdateQuantity(product.id, Number(e.target.value))
    }

    const handleDeleteItem = () => {
        deleteItem(product.id)
    }
    return(
        <Item>
            <img src={product.image_url}/> 
            <div>
                <h4>{product.name} <button onClick={handleDeleteItem} aria-label="Remover item"><DeleteIcon/></button></h4>
                <p>{product.description}</p>
                <div>
                    <SelectQuantity value={product.quantity} onChange={handleChangeQuantity}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </SelectQuantity>
                    <span>{FormatPrice(product.price_in_cents)}</span>
                </div>
            </div>
        </Item>
    )
}