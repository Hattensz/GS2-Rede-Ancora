import styled from 'styled-components';

// Estilizando o formulário
export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 600px; /* Aumentando a largura do formulário */
    margin: 0 auto; /* Centralizar o formulário horizontalmente */
`;

// Estilizando as labels
export const Label = styled.label`
    margin-bottom: 20px; /* Aumentando o espaço entre as labels e os inputs */
    font-weight: bold;
    font-size: 20px; /* Aumentando o tamanho da fonte */
`;

// Estilizando os inputs
export const Input = styled.input`
    width: 100%;
    height: 70px; /* Aumentando a altura dos inputs */
    padding: 20px;
    margin-bottom: 30px; /* Aumentando o espaço entre os inputs */
    border: 3px solid #ccc; /* Aumentando a espessura da borda */
    border-radius: 10px;
    font-size: 20px; /* Aumentando o tamanho da fonte */
`;

// Estilizando o checkbox
export const CheckboxWrapper = styled.div`
    display: flex;
    align-items: center;
    font-size: 20px; /* Aumentando o tamanho da fonte */
`;

export const Checkbox = styled.input`
    width: 30px; /* Aumentando a largura do checkbox */
    height: 30px; /* Aumentando a altura do checkbox */
    margin-right: 15px; /* Adicionando espaço entre o checkbox e o texto */
`;

// Estilizando o botão de envio
export const SubmitButton = styled.button`
    width: 100%;
    height: 80px; /* Aumentando a altura do botão */
    padding: 25px;
    background-color: #007bff; /* Cor de fundo azul */
    color: #fff; /* Cor do texto branco */
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-size: 22px; /* Aumentando o tamanho da fonte do botão */

    &:hover {
        background-color: #0056b3; /* Cor de fundo azul mais escura ao passar o mouse */
    }
`;
