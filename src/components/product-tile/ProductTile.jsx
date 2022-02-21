import React, { useEffect, useState } from "react";
import { PropTypes as PT } from "prop-types";
import { Link } from "react-router-dom";
import { camelCase } from "lodash";

import { TileContainer } from "./styled";

const ProductTile = ({ title, data, className }) => {
  const [transformedClassName, setTransformedClassName] = useState("");
  useEffect(() => {
    if (className.length >= 1) {
      setTransformedClassName(camelCase(className));
    }
  }, [className, data]);

  return (
    <TileContainer transformedClassName={transformedClassName}>
      {title}
        <Link to={`/category/${transformedClassName}`}>
          <img
            src={data[0].image}
            alt={data[0].title}
            width={200}
            height={200}
          />
        </Link>
    </TileContainer>
  );
};

ProductTile.propTypes = {
  className: PT.string,
  title: PT.string,
  data: PT.arrayOf(PT.object),
};

export default ProductTile;
