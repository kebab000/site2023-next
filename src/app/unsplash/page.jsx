"use client";
import React, { useEffect, useState } from "react";
import ContTitle from "@/components/title/ContTitle";
import UnsplashCont from "./UnsplashCont";
import UnsplashSearch from "./UnsplashSearch";
import UnsplashTag from "./UnsplashTag";

const Unsplash = () => {
  const [images, setImages] = useState([]);
  
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        "https://api.unsplash.com/photos?client_id=Wy3aU02kZCmqZYm8bpmsgKBccb06xdDXsWYBEjOGnPE&per_page=30"
      );  
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      console.log(data)
      setImages(data);
    };
    getData();
  }, []);

  const search = async (query) => {
    await fetch(
      `https://api.unsplash.com/search/photos?client_id=Wy3aU02kZCmqZYm8bpmsgKBccb06xdDXsWYBEjOGnPE&per_page=30&query=${query}`
    )
      .then((response) => response.json())
      .then((result) => setImages(result.results))
      .catch((error) => console.log(error));
  };

return (
    <>
      <ContTitle title="Unsplash" />
      <UnsplashSearch onSearch={search} />
      <UnsplashTag onSearch={search} />
      <UnsplashCont images={images}/>
    </>
);
}

export default Unsplash