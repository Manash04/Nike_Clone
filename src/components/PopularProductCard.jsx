import React from "react";
import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price, rating }) => {
  return (
    <div className="flex flex-1 flex-col w-full ">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]"></img>
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24}></img>
        <p className="text-xl text-slate-500">{rating}</p>
      </div>
      <h1 className="font-palanquin mt-2 leading-normal text-2xl font-semibold">{name}</h1>
      <p className="mt-2 font-semibold font-montserrat text-red-500 text-2xl leading-normal">{price}</p>
    </div>
  );
};

export default PopularProductCard;
