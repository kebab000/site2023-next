"use client";
import React, { useEffect, useState } from "react";
import ContTitle from "@/components/title/ContTitle";
import UnsplashCont from "./UnsplashCont";

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
  console.log(images);

return (
    <>
      <ContTitle title="Unsplash" />
      <UnsplashCont images={images}/>
    </>
);
}

export default Unsplash