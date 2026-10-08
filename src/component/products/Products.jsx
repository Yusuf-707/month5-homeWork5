import React from "react";
import ProductCard from "../../ui/ProductCard";
import { ProductUnitls } from "../../unitls/productUnitls";
import style from "./product.module.scss";
const Products = () => {
  return (
    <div className={style.products_cont}>
      <h1>Simple and tasty recipes</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
      </p>
      <div className={style.products}>
        {ProductUnitls.map((unitls, index) => (
          <ProductCard
            key={index}
            globalClassName={style.productCard}
            imgDivClassName={style.imgDivClassName}
            foodImg={style.foodImg}
            roundImgDivClassName={style.roundImgDivClassName}
            healthyFoodClassName={style.healthyFood}
            condition_cont={style.condition_cont}
            fotos={style.fotos}
            img={unitls.img}
            condition={unitls.condition}
            text={unitls.text}
            time={unitls.time}
            foodName={unitls.foodName}
            background={unitls.background}
            roundImg={unitls.roundImg}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
