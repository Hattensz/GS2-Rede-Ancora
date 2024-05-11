import { useNavigate } from "react-router-dom";

function Products(props) {
  const navigate = useNavigate()
  const adicionarAoCarrinho = (produto) => {
    props.setCarrinho([...props.carrinho, produto]);
  };
  function  voltarParaPesquisa(){
    navigate("/search")
  }

  return (
    <div className="row m-5 overflow-x-auto">
      <div className="text-center">
        <h1 className="pt-4" style={{ fontWeight: "bold", color: "#003A5D", fontSize: "4.5rem" }}>
          Produtos
        </h1>
      </div>
      <div>
        <div className="row m-3">
          {props.produtos.length === 0 ? (
            <div className="col-md-12 text-center">
              <p style={{ fontSize: "3rem" }}>Não encontramos itens disponíveis.</p>
              <button className="btn btn-primary fs-3" onClick={()=>{
                voltarParaPesquisa()
              }}>
                Voltar para a Pesquisa
              </button>
            </div>
          ) : (
            props.produtos.map((product, index) => (
              <div className="col-md-6 pb-4" key={index}>
                <div className="card">
                  <img
                    src={product.imagem}
                    className="card-img-top"
                    alt={product.name}
                    style={{ width: "450px", height: "450px" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title" style={{ fontSize: "3rem" }}>{product.name}</h5>
                    <div className="d-flex">
                      <p className="fs-3">R$</p>
                      <h2 className="fs-2 fw-bold card-title">
                        {product.price.toFixed(2)}
                      </h2>
                    </div>
                    <p className="card-text" style={{ fontSize: "2.25rem" }}>{product.parcel}</p>
                    <button
                      className="fs-3 btn btn-primary"
                      onClick={() => adicionarAoCarrinho(product)}
                      style={{ fontSize: "3rem" }}
                    >
                      Adicionar ao Carrinho
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;
