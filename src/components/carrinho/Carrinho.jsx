import React from 'react';
import { CarrinhoPageWrapper, CarrinhoHeader, ListaItens, ItemCarrinho, ItemNome, Preco, BotaoPagamento, Imagem, Parcel } from './stylesCarrinho'; // Importando os componentes estilizados
import { Link } from 'react-router-dom';

const Carrinho = (props) => {
    return (
        <CarrinhoPageWrapper>
            <CarrinhoHeader>Seu Carrinho</CarrinhoHeader>
            <ListaItens>
                {props.carrinho.map(item => (
                    <ItemCarrinho key={item.id}>
                        <ItemNome>{item.name}</ItemNome>
                        <Preco>R${item.price.toFixed(2)}</Preco>
                        <Imagem src={item.imagem} alt={item.name} /> {/* Adicionando a imagem do item */}
                        <Parcel>{item.parcel}</Parcel>
                    </ItemCarrinho>
                ))}
            </ListaItens>
            <BotaoPagamento to="/pagamento">Ir para Pagamento</BotaoPagamento>
        </CarrinhoPageWrapper>
    );
}

export default Carrinho;
