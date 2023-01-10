import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { selectProducts } from "../../redux/selectors/products-selectors";
import { fetchProducts } from "../../redux/reducers/products-reducer";
import ProductCard from "../ProductCard/ProductCard";
import mainPageStyles from "./MainPage.module.css";

function MainPage(props) {
  useEffect(props.fetchProducts, []);
  console.log(props);

  let productsTemplateArray = props.products.map((product) => (
    <ProductCard
      key={product.id}
      title={product.title}
      price={product.price}
      category={product.category}
      description={product.description}
      image={product.image}
    />
  ));
  return (
    <div>
      <div className={mainPageStyles.container}>
        Products
        <div className={mainPageStyles.products}>{productsTemplateArray}</div>
      </div>
    </div>
  );
}

let mapStateToProps = (state) => {
  return {
    products: selectProducts(state),
  };
};

export default connect(mapStateToProps, { fetchProducts })(MainPage);