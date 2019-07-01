import React from "react";
import cn from "classnames";
import { Rating } from "../Rating";
import goodsImg from "./img/placeholder.jpg";
import s from "./Goods.module.scss";

export const Goods = ({ isNone }) => {
  return (
    <div className={cn(s.goods, { [s.goodsNone]: isNone })}>
      <div className={cn(s.goodsType, { [s.goodsTypeNone]: isNone })}>
        {isNone ? "Недоступен" : "В наличии"}
      </div>
      <img
        className={cn(s.goodsImg, { [s.goodsImgNone]: isNone })}
        src={goodsImg}
        alt="placeholder"
        width="224"
        height="200"
      />
      <div className={s.goodsName}>Название первого товара</div>
      <Rating />
      <div className={s.goodsPrise}>
        23 000 ₽<span className={s.goodsOldPrise}>23 000 ₽</span>
      </div>
    </div>
  );
};
