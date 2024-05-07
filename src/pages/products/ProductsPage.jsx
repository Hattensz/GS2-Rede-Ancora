import Header2 from "../../components/header2/Header2";
import Products from "../../components/products/Products";
import SignupMessage from "../../components/signupMessage/SignupMessage";

function ProductsPage() {
  return (
    <div className="bg-light overflow-x-hidden">
      <Header2 />
      <SignupMessage />
      <Products />
    </div>
  );
}

export default ProductsPage;
