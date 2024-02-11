import styled from "styled-components";
import { GoBackIcon } from "./icons/go-back-icon";
import { useRouter } from "next/navigation";

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border: none;
    background: transparent;
    cursor: pointer;

    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    color: var(--standard-text);
`
interface GoBackButtonProps{
    navigate: string;
}

export function GoBackButton({navigate}: GoBackButtonProps){
    const router = useRouter();
    const handleNavigate = () => {
        router.push(navigate)
    }

    return(
        <Button onClick={handleNavigate}>
            <GoBackIcon/>
            Voltar
        </Button>
    )
}