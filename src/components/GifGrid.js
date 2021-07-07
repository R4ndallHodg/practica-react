// import React, { useEffect, useState } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const { data: gifs, loading } = useFetchGifs(category);

  console.log(gifs);
  console.log(loading);

  return (
    <div className="card-grid ">
      <h3>{category}</h3>
      {loading && <p>loading</p>}
      {gifs.map((gif) => (
        <GifGridItem key={gif.id} {...gif} />
      ))}
    </div>
  );
};
