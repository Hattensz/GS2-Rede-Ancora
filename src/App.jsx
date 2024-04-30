import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import SearchPage from "./components/search/SearchPage";

function App() {
  return (
    <>
      <Header />
      <Home />
      <SearchPage />
    </>
  );
}

export default App;
