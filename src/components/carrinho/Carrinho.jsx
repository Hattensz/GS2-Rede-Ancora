import React from 'react';
import { CarrinhoPageWrapper, CarrinhoHeader, ListaItens, ItemCarrinho, ItemNome, Preco, BotaoPagamento } from './stylesCarrinho';
import { Link } from 'react-router-dom';

const Carrinho = () => {
    // Exemplo de itens do carrinho
    const itensCarrinho = [
        { id: 1, nome: 'Produto 1', preco: 10 },
        { id: 2, nome: 'Produto 2', preco: 20 },
        { id: 3, nome: 'Produto 3', preco: 15 },
    ];

    return (
        <CarrinhoPageWrapper>
            <CarrinhoHeader>Seu Carrinho</CarrinhoHeader>
            <ListaItens>
                {itensCarrinho.map(item => (
                    <ItemCarrinho key={item.id}>
                        <ItemNome>{item.nome}</ItemNome>
                        <Preco>R${item.preco.toFixed(2)}</Preco>
                    </ItemCarrinho>
                ))}
            </ListaItens>
            <BotaoPagamento to="/pagamento">Ir para Pagamento</BotaoPagamento>
        </CarrinhoPageWrapper>
    );
}

export default Carrinho;
