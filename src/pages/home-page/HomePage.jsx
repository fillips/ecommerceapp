import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useFetchProductsQuery } from "../../services/products-service";
import ProductTile from "../../components/product-tile/ProductTile";
import LoadingSpinner from "../../components/loading-spinner/LoadingSpinner";

import Header from "../../containers/header/Header";
import { HomePageTitle, HomePageGrid, HomeContainer } from "./styled";

const HomePage = () => {
  let navigate = useNavigate();
  const { data, error, isLoading } = useFetchProductsQuery();
  const user = useSelector((state) => state.auth.authUser);
  const [mensClothing, setMensClothing] = useState([]);
  const [jewelery, setJewelery] = useState([]);
  const [electronics, setElectronics] = useState([]);
  const [womensClothing, setWomensClothing] = useState([]);
  const [highestRated, setHighestRated] = useState([]);
  const [giftsUnder50, setGiftsUnder50] = useState([]);

  useEffect(() => {
    if (user.loggedIn === false) {
      return navigate("/login");
    }
    const fetchData = () => {
      setMensClothing(data.filter((i) => i.category === "men's clothing"));
      setJewelery(data.filter((i) => i.category === "jewelery"));
      setElectronics(data.filter((i) => i.category === "electronics"));
      setWomensClothing(data.filter((i) => i.category === "women's clothing"));
      setHighestRated(data.filter((i) => i.rating.rate >= 4.5));
      setGiftsUnder50(data.filter((i) => i.price <= 50));
    };
    if (!isLoading) {
      fetchData();
    }
  }, [user, data, navigate, isLoading]);
  return (
    <HomeContainer>
      <Header />
      <HomePageTitle>Shop By Category</HomePageTitle>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <HomePageGrid>
          {[
            { title: "gifts under £50", collection: giftsUnder50 },
            { title: "highest rated", collection: highestRated },
            { title: "jewelery", collection: jewelery },
            { title: "electronics", collection: electronics },
            { title: `men's clothing`, collection: mensClothing },
            { title: `women's clothing`, collection: womensClothing },
          ].map((i) => {
            if (i.collection.length >= 1) {
              return (
                <ProductTile
                  key={i.title}
                  title={i.title}
                  data={i.collection}
                  className={i.title}
                />
              );
            }
            return null;
          })}
        </HomePageGrid>
      )}
    </HomeContainer>
  );
};

export default HomePage;
