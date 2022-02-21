import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useFetchProductsQuery } from "../../services/products-service";
import ItemTile from "../../components/item-tile/ItemTile";
import Header from "../../containers/header/Header";
import { ItemPageGrid } from "./styled";
import LoadingSpinner from "../../components/loading-spinner/LoadingSpinner";

const CategoryPage = () => {
  const user = useSelector((state) => state.auth.authUser);
  const { data, error, isLoading } = useFetchProductsQuery();

  let navigate = useNavigate();
  const params = useParams();
  const [collection, setCollection] = useState([]);
  useEffect(() => {}, [data, error, isLoading]);

  useEffect(() => {
    if (user.loggedIn === false) {
      return navigate("/login");
    }
  }, [user, navigate]);

  useEffect(() => {
    if (!isLoading) {
      if (params.category === "jewelery") {
        setCollection(data.filter((i) => i.category === "jewelery"));
      }

      if (params.category === "electronics") {
        setCollection(data.filter((i) => i.category === "electronics"));
      }

      if (params.category === "mensClothing") {
        setCollection(data.filter((i) => i.category === "men's clothing"));
      }

      if (params.category === "womensClothing") {
        setCollection(data.filter((i) => i.category === "women's clothing"));
      }

      if (params.category === "highestRated") {
        setCollection(data.filter((i) => i.rating.rate >= 4.5));
      }

      if (params.category === "giftsUnder50") {
        setCollection(data.filter((i) => i.price <= 50));
      }
    }
  }, [params.category, data, isLoading]);

  if (error) {
    return (
      <>
        <Header />
        <p>Sorry an error occured. Please try again later</p>
      </>
    );
  } else {
    return (
      <>
        <Header />

        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <ItemPageGrid>
            {collection.map((i) => {
              return <ItemTile key={i.id} data={i} />;
            })}
          </ItemPageGrid>
        )}
      </>
    );
  }
};

export default CategoryPage;
