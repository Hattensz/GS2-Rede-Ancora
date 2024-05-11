import Search from "../../components/search/Search";
import Header3 from "../../components/header3/Header3";
function SearchPage(props) {
  return (
    <>
      <Search setProdutos={props.setProdutos}/>
    </>
  );
}

export default SearchPage;
