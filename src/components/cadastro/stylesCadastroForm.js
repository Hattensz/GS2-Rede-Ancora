import styled from 'styled-components';

// Estilizando o formulário
export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px; /* Ajuste a largura conforme necessário */
    margin: 0 auto; /* Centralizar o formulário horizontalmente */
`;

// Estilizando as labels
export const Label = styled.label`
    margin-bottom: 5px; /* Espaço entre as labels e os inputs */
    font-weight: bold;
`;

// Estilizando os inputs
export const Input = styled.input`
    width: 100%;
    padding: 8px;
    margin-bottom: 15px; /* Espaço entre os inputs */
    border: 1px solid #ccc;
    border-radius: 5px;
`;

// Estilizando o botão de envio
export const SubmitButton = styled.button`
    width: 100%;
    padding: 10px;
    background-color: #007bff; /* Cor de fundo azul */
    color: #fff; /* Cor do texto branco */
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3; /* Cor de fundo azul mais escura ao passar o mouse */
    }
`;
// Em CadastroFormStyles.js


