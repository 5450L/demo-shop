import React from "react";
import filterStyles from "./Filter.module.css";

export default function Filter(props) {
  let filterButtonsTemplateArray = props.categories.map((category, index) => (
    <button
      className={
        props.chosenCategories.includes(category)
          ? filterStyles.activeButton
          : ""
      }
      key={index}
      onClick={() => {
        props.setChosenCategories(category);
      }}
    >
      {category.toUpperCase()}
    </button>
  ));
  return (
    <div className={`${filterStyles.filter}`}>{filterButtonsTemplateArray}</div>
  );
}
