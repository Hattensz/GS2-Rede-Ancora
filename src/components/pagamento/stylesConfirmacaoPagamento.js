// ConfirmacaoStyles.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CheckCircle } from '@mui/icons-material';

export const ConfirmacaoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

export const Titulo = styled.h2`
    font-size: 36px; /* Aumentando o tamanho do título */
    margin-bottom: 40px; /* Aumentando o espaçamento abaixo do título */
`;

export const Mensagem = styled.p`
    font-size: 24px; /* Aumentando o tamanho da mensagem */
    margin-bottom: 30px; /* Aumentando o espaçamento abaixo da mensagem */
`;

export const BotaoInicio = styled(Link)`
    display: inline-block;
    background-color: #007bff;
    color: #fff;
    text-decoration: none;
    padding: 15px 30px; /* Aumentando o tamanho do botão */
    border-radius: 8px; /* Aumentando o raio da borda do botão */
    font-size: 24px; /* Aumentando o tamanho do texto do botão */
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0056b3;
    }
`;

export const IconeCheck = styled(CheckCircle)`
    font-size: 150px; /* Aumentando o tamanho do ícone */
    color: #28a745;
`;
