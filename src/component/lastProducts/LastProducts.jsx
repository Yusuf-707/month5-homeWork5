import React from "react";
import ProductCard from "../../ui/ProductCard";
import { LastProductUnitls } from "../../unitls/lastProductUnitls";
import style from "./lastProducts.module.scss";
const LastProducts = () => {
  return (
    <div className={style.lastProducts_cont}>
      <h1>Try this delicious recipe to make your day</h1>
      <div className={style.products}>
        {LastProductUnitls.map((unitls, index) => (
          <ProductCard
            key={index}
            globalClassName={style.productCard}
            imgDivClassName={style.imgDivClassName}
            foodImg={style.foodImg}
            roundImgDivClassName={style.roundImgDivClassName}
            condition_cont={style.condition_cont}
            fotos={style.fotos}
            img={unitls.img}
            condition={unitls.condition}
            text={unitls.text}
            time={unitls.time}
            foodName={unitls.foodName}
          />
        ))}
      </div>
    </div>
  );
};

export default LastProducts;
