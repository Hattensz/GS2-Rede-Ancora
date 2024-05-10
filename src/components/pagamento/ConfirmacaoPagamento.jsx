// ConfirmacaoPagamento.js
import { CheckCircle } from '@mui/icons-material';
import { ConfirmacaoContainer, Titulo, Mensagem, BotaoInicio } from "./stylesConfirmacaoPagamento";

const ConfirmacaoPagamento = () => {
    return (
        <ConfirmacaoContainer>
            <CheckCircle fontSize='large' className="IconeCheck" />
            <Titulo>Pagamento Confirmado!</Titulo>
            <Mensagem>O seu pagamento foi processado com sucesso.</Mensagem>
            <Mensagem>Obrigado por comprar conosco!</Mensagem>
            <BotaoInicio to="/">Voltar para a página inicial</BotaoInicio>
        </ConfirmacaoContainer>
    );
}

export default ConfirmacaoPagamento;
