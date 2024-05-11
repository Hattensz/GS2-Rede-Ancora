import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <img
        className="position-absolute top-0 start-0 ms-2 mt-1"
        src="../src/assets/logo-hd.png"
        alt="Logo Rede Ancora"
      />
      <div className="d-flex container-fluid bg-gray">
        <div className="container-fluid mt-5 d-flex justify-content-center text-center gap-5 ms-5">
          <Link to="/" className="text-decoration-none">
            <h1 className="text-blue menu-hover fs-3 fw-semibold text-uppercase">
              Home
            </h1>
          </Link>
          <h1 className="text-blue fs-3 fw-semibold">|</h1>
          <Link to="/sobre" className="text-decoration-none">
            <h1 className="text-blue menu-hover fs-3 fw-semibold text-uppercase">
              Sobre o Projeto
            </h1>
          </Link>
          <h1 className="text-blue fs-3 fw-semibold">|</h1>
          <Link to="/products" className="text-decoration-none">
            <h1 className="text-blue menu-hover fs-3 fw-semibold text-uppercase">
              Loja Virtual
            </h1>
          </Link>
          <h1 className="text-blue fs-3 fw-semibold">|</h1>
          <Link to="/cadastro" className="text-decoration-none">
            <h1 className="text-blue menu-hover fs-3 fw-semibold text-uppercase">
              Fazer Cadastro
            </h1>
          </Link>
        </div>
      </div>
    </>
  );
}
