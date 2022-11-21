import React from "react";
import "./DisplayRomes.css";
import { FaStarHalfAlt } from "react-icons/fa";

const DisplayRomes = (props) => {
  let { id, name, url, guests, beds, bedrooms, bathrooms, star, price, total } =
    props.rome;
  console.log(props);
  return (
    <div className="text-black mb-5">
      <div className="flex justify-start">
        <span className="mr-10 ">
          <img className="hotel-room-img rounded-md" src={url} alt="" />
        </span>
        <span className="hotel-room-details text-start">
          <h1 className="text-1xl font-bold text-start">{name}</h1>
          <p className="text-gray-500">{`${guests} guests ${bedrooms} bedrooms ${beds} beds ${bathrooms} baths`}</p>
          <p className="text-gray-500">Wifi Conditioning Kitchen</p>
          <p className="text-gray-500">Cancelling flexibility available</p>

          <div className="flex justify-between">
            <p className="flex justify-between ">
              <FaStarHalfAlt className="mt-1 mr-2 ml-0" /> {star}
            </p>
            <p>
              {price}
              <p className="text-gray-500 inline">/night</p>{" "}
            </p>
            <p className="text-gray-500">{total}total</p>
          </div>
        </span>
      </div>
    </div>
  );
};

export default DisplayRomes;
