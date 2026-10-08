import React from "react";
import maskBg from '../img/products/MaskGroup.png'
const ProductCard = (props) => {
  const {
    roundImg,
    img,
    text,
    condition,
    time,
    foodName,
    globalClassName,
    imgDivClassName,
    roundImgDivClassName,
    healthyFoodClassName,
    background,
    condition_cont,
    fotos,
    foodImg
  } = props;
  return (
    <div className={globalClassName}>
      {background ? (
        <div className={healthyFoodClassName} style={{ backgroundImage: `url(${maskBg})` }}>
          <h1>Don’t forget to eat healthy food</h1>
          <div className={roundImgDivClassName}>
            <img className="logo" src={roundImg} alt="" />
          </div>
          <p>www.foodieland.com</p>
        </div>
      ) : (
        <>
          <div className={imgDivClassName}>
            <img className={foodImg} src={img} alt="" />
            {condition && (
                <img src={condition} className={condition_cont} alt="" />
            )}
          </div>
          <p>{text}</p>
          {(time || foodName) && (
            <div className={fotos}>
              <img src={time} alt="" />
              <img src={foodName} alt="" />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ProductCard;
