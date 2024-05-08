import styled from 'styled-components';

// Estilizando o formulário
export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 500px; /* Aumentando a largura do formulário */
    margin: 0 auto; /* Centralizar o formulário horizontalmente */
`;

// Estilizando as labels
export const Label = styled.label`
    margin-bottom: 15px; /* Aumentando o espaço entre as labels e os inputs */
    font-weight: bold;
`;

// Estilizando os inputs
export const Input = styled.input`
    width: 100%;
    height: 60px; /* Aumentando a altura dos inputs */
    padding: 15px;
    margin-bottom: 25px; /* Aumentando o espaço entre os inputs */
    border: 2px solid #ccc; /* Aumentando a espessura da borda */
    border-radius: 8px;
    font-size: 16px; /* Aumentando o tamanho da fonte */
`;

// Estilizando o checkbox
export const CheckboxWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const Checkbox = styled.input`
    width: 25px; /* Aumentando a largura do checkbox */
    height: 25px; /* Aumentando a altura do checkbox */
    margin-right: 10px; /* Adicionando espaço entre o checkbox e o texto */
`;

// Estilizando o botão de envio
export const SubmitButton = styled.button`
    width: 100%;
    height: 70px; /* Aumentando a altura do botão */
    padding: 18px;
    background-color: #007bff; /* Cor de fundo azul */
    color: #fff; /* Cor do texto branco */
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 18px; /* Aumentando o tamanho da fonte do botão */

    &:hover {
        background-color: #0056b3; /* Cor de fundo azul mais escura ao passar o mouse */
    }
`;
