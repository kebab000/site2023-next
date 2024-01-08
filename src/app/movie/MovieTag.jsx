import React from "react";
import style from "./page.module.scss";

const movieTag = [
  {
    name: "최신 영화",
    url: "https://api.themoviedb.org/3/movie/now_playing",
  },
  { name: "인기 영화", url: "https://api.themoviedb.org/3/movie/popular" },
  { name: "영화 순위", url: "https://api.themoviedb.org/3/movie/top_rated" },
  { name: "개봉 예정", url: "https://api.themoviedb.org/3/movie/upcoming" },
  { name: "TV 인기", url: "https://api.themoviedb.org/3/tv/popular" },
];

const MovieTag = ({ onSearch }) => {
  const [activeTag, setActiveTag] = React.useState("");
  function btnClick(e) {
    const clickedTag = movieTag.find((tag) => tag.name === e.target.innerText);
    if (clickedTag) {
      setActiveTag(clickedTag.name);
      onSearch(clickedTag.url);
    }
  }
  return (
    <div className={style.movie__tag}>
      <ul>
        {movieTag.map((tag, index) => (
          <li
            onClick={btnClick}
            key={index}
            className={tag.name === activeTag ? "active" : ""}
          >
            <a href="#">{tag.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieTag;