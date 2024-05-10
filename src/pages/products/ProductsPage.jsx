import Header3 from "../../components/header3/Header3"
import Products from "../../components/products/Products";
import SignupMessageImg from "../../components/signupMessage/SignupMessage";

function ProductsPage() {
  return (
    <div className="bg-light overflow-x-hidden">
      <Header3 />
      <SignupMessageImg />
      <Products />
    </div>
  );
}

export default ProductsPage;
