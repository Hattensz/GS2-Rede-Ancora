import styled from "styled-components";
import { Link } from 'react-router-dom';

// Aumentando proporcionalmente em 3x
const scaleMultiplier = 3;

export const CarrinhoPageWrapper = styled.div`
    max-width: ${800 * scaleMultiplier}px;
    margin: 0 auto;
    padding: ${20 * scaleMultiplier}px;
`;

export const CarrinhoHeader = styled.h2`
    color: #333;
    font-size: ${24 * scaleMultiplier}px;
    margin-bottom: ${20 * scaleMultiplier}px;
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
    padding: ${10 * scaleMultiplier}px 0;
`;

export const ItemNome = styled.span`
    flex: 1;
    font-size: ${18 * scaleMultiplier}px; /* Aumentando o tamanho da fonte para os nomes dos itens */
`;

export const Preco = styled.span`
    font-weight: bold;
    font-size: ${18 * scaleMultiplier}px; /* Aumentando o tamanho da fonte para os preços */
`;

export const BotaoPagamento = styled(Link)`
    display: inline-block;
    background-color: #007bff;
    color: #fff;
    text-decoration: none;
    padding: ${10 * scaleMultiplier}px ${20 * scaleMultiplier}px;
    border-radius: ${5 * scaleMultiplier}px;
    margin-top: ${20 * scaleMultiplier}px;
    font-size: ${16 * scaleMultiplier}px; /* Aumentando o tamanho da fonte para o botão */

    &:hover {
        background-color: #0056b3;
    }
`;
