"use client";
import ContTitle from "@/components/title/ContTitle";
import React, { useEffect, useState } from "react";
import YoutubeCont from "./YoutubeCont";
import YoutubeSearch from "./YoutubeSearch";
import YoutubeTag from "./YoutubeTag";

// import YoutubeSearch from "@/components/youtube/YoutubeSearch";
// import YoutubeTag from "@/components/youtube/YoutubeTag";


const Youtube = () => {
  const [youtubes, setYoutubes] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=32&q=웹개발&type=video&videoDuration=medium&key=AIzaSyDu13VB1Y6cnu4y9DKqA3bLgAXuqaw4BFU"
      );
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();

      setYoutubes(data.items);
    };
    getData();
  }, []);

  const search = async (query) => {
    await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=32&q=${query}&type=video&videoDuration=medium&key=AIzaSyDu13VB1Y6cnu4y9DKqA3bLgAXuqaw4BFU`
    )
      .then((response) => response.json())
      .then((result) => setYoutubes(result.items))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <ContTitle title="youtube" />
      <YoutubeSearch onSearch={search} />
      <YoutubeTag onSearch={search} />
      <YoutubeCont youtubes={youtubes} />
    </>
  );
};

export default Youtube;