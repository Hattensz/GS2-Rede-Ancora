import React from "react";

function Products() {
  // Apagar placeholder depois de conectar a API
  const placeholderProduct = {
    id: 1,
    name: "Nome do produto só que bem longo pra ver como fica",
    price: 38.9,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_615818-MLB54272990245_032023-O.webp",
    parcel: "12x de R$ 3,24 sem juros",
  };

  const products = Array.from({ length: 8 }, (_, index) => ({
    ...placeholderProduct,
    id: index + 1,
  }));

  return (
    <div className="row m-3 overflow-x-auto">
      <div className="text-center">
        <h1 className="pt-2" style={{ fontWeight: "bold", color: "#003A5D" }}>
          Produtos
        </h1>
      </div>
      <div>
        <div className="row m-3">
          {products.map((product) => (
            <div className="col-md-6 pb-4" key={product.id}>
              <div className="card">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <div className="d-flex">
                    <p className="">R$</p>
                    <h2 className="fs-1 fw-bold card-title">
                      {product.price.toFixed(2)}
                    </h2>
                  </div>
                  <p className="card-text">{product.parcel}</p>
                  <button className="fs-2 btn btn-primary">
                    Adicionar ao Carrinho
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
