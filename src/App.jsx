import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import GlobalStyle from "./GlobalStyle";
import Home from "./components/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from "./pages/search/SearchPage";
import ProductsPage from "./pages/products/ProductsPage";
import CadastroPage from "./pages/cadastro/CadastroPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/cadastro" element ={<CadastroPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
