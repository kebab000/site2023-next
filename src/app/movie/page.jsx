"use client";
import React, { useEffect, useState } from "react";
import MovieCont from "./MovieCont";
import ContTitle from "@/components/title/ContTitle";
import MovieSearch from "./MovieSearch";
import MovieTag from "./MovieTag";


const Movie = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=697729d3f274ce88cf5729d38280fd33"
      );      
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      setMovies(data.results);
    };
    getData();
  }, []);
  const search = async (query) => {
    await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=697729d3f274ce88cf5729d38280fd33&language=ko-KR&query=${query}`
    )
      .then((response) => response.json())
      .then((result) => setMovies(result.results))
      .catch((error) => console.log(error));
  };

  const tags = async (query) => {
    await fetch(
      `${query}?api_key=697729d3f274ce88cf5729d38280fd33&language=ko-KR`
    )
      .then((response) => response.json())
      .then((result) => setMovies(result.results))
      .catch((error) => console.log(error));
  };
  return (
    <>
      <ContTitle title="movie" />
      <MovieSearch onSearch={search}/>
      <MovieTag onSearch={tags}/>
      <MovieCont movies={movies} />
    </>
  );
};
export default Movie;