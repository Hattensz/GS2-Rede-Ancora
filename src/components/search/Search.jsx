import React, { useState } from "react";
import "./Search.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../assets/logo-hd.png";
import { useForm } from "react-hook-form";
import Busca from "../../dominio/busca/Busca";
import { useNavigate } from 'react-router-dom';
import { useBusca } from "../../utils/BuscaContext";

function Search() {
  const { setBuscaInstance } = useBusca();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function buscarDados(dados) {
    const { placa, nomeProduto, familia, marca } = dados;
    const busca = new Busca(placa, familia, marca, nomeProduto);
    setBuscaInstance(busca);
    setLoading(true); // Sinaliza que a busca está ocorrendo
    navigate("/products"); // Navega para a página de produtos
  }

  return (
    <div
      className="search-page d-flex justify-content-center align-items-center pb-5"
      style={{
        backgroundColor: "#003A5D",
        minHeight: "100vh",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
      }}
    >
      <div className="container fs-1">
        <div className="d-flex flex-column align-items-center mt-5">
          <div className="text-center">
            <img className="w-50" src={logo} alt="Logo da Empresa" />
          </div>
          <div className="col-md-11 pt-5">
            <form onSubmit={handleSubmit(buscarDados)}>
              <div className="mb-3">
                <label htmlFor="placa" className="form-label text-white">
                  Placa do Carro:
                </label>
                <input
                  type="text"
                  className="fs-1 form-control"
                  {...register("placa")}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="nomeProduto" className="form-label text-white">
                  Nome do produto:
                </label>
                <input
                  type="text"
                  className="fs-1 form-control"
                  {...register("nomeProduto")}
                />
              </div>
              
              <div className="mb-3">
                <label htmlFor="familia" className="form-label text-white">
                  Família:
                </label>
                <input
                  type="text"
                  className="fs-1 form-control"
                  {...register("familia")}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="marca" className="form-label text-white">
                  Marca:
                </label>
                <input
                  type="text"
                  className="fs-1 form-control"
                  {...register("marca")}
                />
              </div>
              
              <div className="col-md-11 text-center mt-5">
                <button 
                    onClick={() => window.location.href = "/"} // Redirecionar para a página inicial ("/")
                    type="button" 
                    className="button fs-1 btn me-5">
                    Home
                </button>
                <button 
                    type="submit" 
                    className="button fs-1 btn">
                    Pesquisar
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
      {loading && <div className="loading-indicator">Carregando...</div>}
    </div>
  );
}

export default Search;
