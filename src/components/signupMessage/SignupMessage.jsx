import { Link } from "react-router-dom";

function SignupMessage() {
  return (
    <div
      className="signup-message"
      style={{ background: "linear-gradient(to top, #D02030, #003A5D)" }}
    >
      <Link
        to="/cadastro"
        className="d-block text-white fs-1 text-center p-3 text-decoration-none"
      >
        cadastre-se para receber 20% de desconto na primeira compra
      </Link>
    </div>
  );
}

export default SignupMessage;
