import { useLoaderData, useNavigation } from "react-router-dom";
import Card from "../../components/Card/Card";
import SearchResultItem from "./SearchResultItem/SearchResultItem";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

import "../../css/SearchResult.min.css";

const SearchResultPage = () => {
  const data = useLoaderData();
  const navigation = useNavigation();

  let content = data?.items?.length ? (
    <ul className="SearchResult__list">
      {data.items.map((item) => {
        return (
          <SearchResultItem
            item={item}
            key={item.id}
            categories={data.categories}
          />
        );
      })}
    </ul>
  ) : (
    <p>No se encontraron productos</p>
  );

  if (navigation.state === "loading") content = <p>Cargando...</p>;

  return (
    <>
      <Breadcrumb />
      <Card className="SearchResult">{content}</Card>
    </>
  );
};

export default SearchResultPage;
