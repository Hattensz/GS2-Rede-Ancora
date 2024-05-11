import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import GlobalStyle from "./GlobalStyle";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from "./pages/search/SearchPage";
import ProductsPage from "./pages/products/ProductsPage";
import CadastroPage from "./pages/cadastro/CadastroPage";
import SobreProjetoPage from "./pages/sobre-projetoo/SobreProjetoPage";
import CarrinhoPage from "./pages/carrinho/CarrinhoPage";
import PagamentoPage from "./pages/pagamento/PagamentoPage"
import { useState } from "react";
function App() {
  const [produtos, setProdutos] = useState([])
  const [carrinho, setCarrinho] = useState([])

  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pagamento" element ={<PagamentoPage/>} />
            <Route path="/cadastro" element ={<CadastroPage/>} />
            <Route path="/sobre" element ={<SobreProjetoPage/>} />

            <Route path="/search" element={<SearchPage setProdutos={setProdutos} />} />
            <Route path="/carrinho" element ={<CarrinhoPage carrinho={carrinho}/>} />
            <Route path="/products" element={<ProductsPage carrinho={carrinho} produtos={produtos} setCarrinho={setCarrinho} />} />
            
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
