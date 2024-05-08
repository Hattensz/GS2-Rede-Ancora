import "bootstrap/dist/css/bootstrap.min.css";
<<<<<<< HEAD
=======
import "./App.css";
import GlobalStyle from "./GlobalStyle";
>>>>>>> e5af0c2340864a5fcb0b69655c6db284cc4eecc0
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from "./pages/search/SearchPage";
import ProductsPage from "./pages/products/ProductsPage";
import CadastroPage from "./pages/cadastro/CadastroPage";
import SobreProjetoPage from "./pages/sobre-projetoo/SobreProjetoPage";

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
          <Route path="/sobre" element ={<SobreProjetoPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
