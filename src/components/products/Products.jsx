import { useBusca } from "../../utils/BuscaContext";
import { useEffect, useState } from "react";

function Products() {
  const { buscaInstance } = useBusca();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Verifica se buscaInstance existe antes de acessar os produtos
    if (buscaInstance && buscaInstance.produtos) {
      setProducts(buscaInstance.produtos);
    }
  }, [buscaInstance]); // <-- Adicionando buscaInstance como dependência

  return (
    <div className="row m-3 overflow-x-auto">
      <div className="text-center">
        <h1 className="pt-2" style={{ fontWeight: "bold", color: "#003A5D" }}>
          Produtos
        </h1>
      </div>
      <div>
        <div className="row m-3">
          {products.map((product, index) => (
            <div className="col-md-6 pb-4" key={index}>
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
