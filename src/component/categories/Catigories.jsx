import React from "react";
import ProductCard from "../../ui/ProductCard";
import { CategoriesUnitls } from "../../unitls/categoriesUnitls";
import style from "./categories.module.scss"
const Catigories = () => {
  return (
    <div className={style.categories_cont}>
      <h1>Categories</h1>
      <div className={style.categories}>
        {CategoriesUnitls.map((unitls, index) => (
          <ProductCard 
          key={index} 
          globalClassName={style.productCard} 
          imgDivClassName={style.imgDivClassName}
          img={unitls.img} 
          text={unitls.text} />
        ))}
      </div>
    </div>
  );
};

export default Catigories;
