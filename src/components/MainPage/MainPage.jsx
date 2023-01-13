import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  selectProducts,
  selectCategories,
  selectChosenCategories,
} from "../../redux/selectors/products-selectors";
import {
  fetchData,
  setChosenCategories,
} from "../../redux/reducers/products-reducer";
import ProductCard from "../ProductCard/ProductCard";
import Filter from "../Filter/Filter";
import mainPageStyles from "./MainPage.module.css";

function MainPage(props) {
  useEffect(props.fetchData, []);

  let productsTemplateArray = props.products
    .filter((product) => {
      if (props.chosenCategories.includes("all")) return product;
      return props.chosenCategories.includes(product.category);
    })
    .map((product) => {
      return (
        <ProductCard
          key={product.id}
          title={product.title}
          price={product.price}
          category={product.category}
          description={product.description}
          image={product.image}
        />
      );
    });

  return (
    <div>
      <div className={mainPageStyles.container}>
        <Filter
          categories={props.categories}
          setChosenCategories={props.setChosenCategories}
          chosenCategories={props.chosenCategories}
        />
        <div className={mainPageStyles.products}>{productsTemplateArray}</div>
      </div>
    </div>
  );
}

let mapStateToProps = (state) => {
  return {
    products: selectProducts(state),
    categories: selectCategories(state),
    chosenCategories: selectChosenCategories(state),
  };
};

export default connect(mapStateToProps, { fetchData, setChosenCategories })(
  MainPage
);
