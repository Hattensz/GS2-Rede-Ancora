import React from "react";
import logo from "../../assets/logo-hd.png";
import "./Header2.css";

function Header2() {
  return (
    <nav className="bg-light">
      <div className="">
        <div
          className="justify-content-end position-relative"
          style={{ height: "25px", backgroundColor: "#003A5D" }}
        >
          <div
            className="navbar navbar-dark position-absolute fw-bold "
            style={{
              backgroundColor: "red",
              border: "2px solid #003A5D",
              top: "50%",
              right: "50px",
              transform: "translateY(-50%)",
              fontSize: "25px",
              marginTop: "5px",
            }}
          >
            <div className="container">
              <ul className="navbar-nav d-flex flex-row gap-5">
                <li className="nav-item">
                  <a className="text-decoration-none text-light" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="text-decoration-none text-light" href="/search">
                    Sobre
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="text-decoration-none text-light"
                    href="/products"
                  >
                    Loja
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-3 h-50">
            <img
              className="w-75 mx-auto d-block"
              src={logo}
              alt="logo rede ancora"
            />
          </div>
          <div className="col-6 mt-5 mb-5">
            <input
              type="text"
              className="fs-1 form-control"
              placeholder="Digite sua busca..."
            />
          </div>
          <button className="button col-2">Buscar</button>
        </div>
        {/*  */}
      </div>
    </nav>
  );
}

export default Header2;
