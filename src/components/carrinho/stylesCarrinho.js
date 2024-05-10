import styled from "styled-components";
import { Link } from 'react-router-dom';

export const CarrinhoPageWrapper = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
`;

export const CarrinhoHeader = styled.h2`
    color: #333;
    font-size: 24px;
    margin-bottom: 20px;
`;

export const ListaItens = styled.ul`
    list-style-type: none;
    padding: 0;
`;

export const ItemCarrinho = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ddd;
    padding: 10px 0;
`;

export const ItemNome = styled.span`
    flex: 1;
`;

export const Preco = styled.span`
    font-weight: bold;
`;

export const BotaoPagamento = styled(Link)`
    display: inline-block;
    background-color: #007bff;
    color: #fff;
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 5px;
    margin-top: 20px;

    &:hover {
        background-color: #0056b3;
    }
`;
