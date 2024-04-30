import React, { useState } from "react";
import "./SearchPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../assets/logo-hd.png";
import { useForm } from "react-hook-form";

function SearchPage() {
  const [listaDados, setListaDados] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function buscarDados(dados) {
    setListaDados([dados]);
    console.log(dados);
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
          <div className="col-12 text-center">
            <img src={logo} alt="Logo da Empresa" />
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
                <label htmlFor="linha" className="form-label text-white">
                  Linha:
                </label>
                <input
                  type="text"
                  className="fs-1 form-control"
                  {...register("linha")}
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
              <div className="mb-3">
                <label htmlFor="codigo" className="form-label text-white">
                  Código:
                </label>
                <input
                  type="text"
                  className="fs-1 form-control"
                  {...register("codigo")}
                />
              </div>
              <div className="col-md-11 text-center mt-5">
                <button type="button" className="button fs-1 btn me-5">
                  Home
                </button>
                <button type="submit" className="button fs-1 btn">
                  Pesquisar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;