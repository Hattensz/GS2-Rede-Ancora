import Carrinho from "../../components/carrinho/Carrinho";
import Header3 from "../../components/header3/Header3";

export default function CarrinhoPage(props){
    return (
        <div>
            <Header3 />
            <Carrinho carrinho={props.carrinho} />
        </div>
    )
}
