import React from "react";
import starImg from "./img/star.svg";
import starImgHalf from "./img/starHalf.svg";
import starImgBorder from "./img/starBorder.svg";
import s from "./Rating.module.scss";

export const Rating = () => {
  return (
    <div className={s.rating}>
      <img
        src={starImg}
        width="16"
        height="16"
        alt="star"
        className={s.ratingStar}
      />
      <img
        src={starImg}
        width="16"
        height="16"
        alt="star"
        className={s.ratingStar}
      />
      <img
        src={starImg}
        width="16"
        height="16"
        alt="star"
        className={s.ratingStar}
      />
      <img
        src={starImgHalf}
        width="16"
        height="16"
        alt="star"
        className={s.ratingStar}
      />
      <img
        src={starImgBorder}
        width="16"
        height="16"
        alt="star"
        className={s.ratingStar}
      />
    </div>
  );
};
