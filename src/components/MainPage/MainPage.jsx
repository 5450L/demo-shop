import React from "react";
import { connect } from "react-redux";

import {
  selectProducts,
  selectCategories,
  selectChosenCategories,
  selectIsFetching,
} from "../../redux/selectors/products-selectors";

import { setChosenCategories } from "../../redux/reducers/products-reducer";

import { addToCart } from "../../redux/reducers/cart-reducer";

import { ProgressBar } from "react-loader-spinner";

import ProductCard from "../ProductCard/ProductCard";
import Filter from "../Filter/Filter";
import mainPageStyles from "./MainPage.module.css";

function MainPage(props) {
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
          addToCart={props.addToCart}
        />
      );
    });

  return (
    <div>
      {props.isFetching ? (
        <ProgressBar
          height="400"
          width="400"
          ariaLabel="progress-bar-loading"
          wrapperStyle={{}}
          wrapperClass="progress-bar-wrapper"
          borderColor="rgb(50, 50, 50)"
          barColor="#FE6C07"
        />
      ) : (
        <div className={mainPageStyles.container}>
          <Filter
            categories={props.categories}
            setChosenCategories={props.setChosenCategories}
            chosenCategories={props.chosenCategories}
          />
          <div className={mainPageStyles.products}>{productsTemplateArray}</div>
        </div>
      )}
    </div>
  );
}

let mapStateToProps = (state) => {
  return {
    products: selectProducts(state),
    categories: selectCategories(state),
    chosenCategories: selectChosenCategories(state),
    isFetching: selectIsFetching(state),
  };
};

export default connect(mapStateToProps, {
  setChosenCategories,
  addToCart,
})(MainPage);
