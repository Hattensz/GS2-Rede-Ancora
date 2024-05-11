import Search from "../../components/search/Search";

function SearchPage(props) {
  return (
    <>
      <Search setProdutos={props.setProdutos}/>
    </>
  );
}

export default SearchPage;
