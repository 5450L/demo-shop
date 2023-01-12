import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { selectProducts } from "../../redux/selectors/products-selectors";
import { fetchProducts } from "../../redux/reducers/products-reducer";
import ProductCard from "../ProductCard/ProductCard";
import Filter from "../Filter/Filter";
import mainPageStyles from "./MainPage.module.css";

function MainPage(props) {
  let [categories, setCategories] = useState(["all"]);
  useEffect(props.fetchProducts, []);

  let productsTemplateArray = props.products.map((product) => {
    if (!categories.includes(product.category)) {
      setCategories(categories.push(product.category));
    }
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
        <Filter categories={categories} />
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
