import React from "react";
import { useLoaderData } from "react-router-dom";
import DisplayRomes from "../DisplayRomes/DisplayRomes";
import maps from "./image 1.png";

const LoadRomes = () => {
  let romes = useLoaderData();
  return (
    <div className="bg-white">
      <div className="flex justify-between">
        <span className="ml-32 mt-12">
          {romes.map((rome) => (
            <DisplayRomes key={rome.id} rome={rome}></DisplayRomes>
          ))}
        </span>
        <span>
          <img className="mr-14 mt-14" src={maps} alt="" />
        </span>
      </div>
    </div>
  );
};

export default LoadRomes;
