import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import GlobalStyle from "./GlobalStyle";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from "./pages/search/SearchPage";
import ProductsPage from "./pages/products/ProductsPage";
import CadastroPage from "./pages/cadastro/CadastroPage";
import SobreProjetoPage from "./pages/sobre-projetoo/SobreProjetoPage";
import { BuscaProvider } from "./utils/BuscaContext";
import CarrinhoPage from "./pages/carrinho/CarrinhoPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <BuscaProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/cadastro" element ={<CadastroPage/>} />
            <Route path="/sobre" element ={<SobreProjetoPage/>} />
            <Route path="/carrinho" element ={<CarrinhoPage/>} />
          </Routes>
        </BuscaProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
