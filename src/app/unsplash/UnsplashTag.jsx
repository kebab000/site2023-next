import React from "react";
import style from "./page.module.scss"

const unsplashTage = [
  { name: "자연 사진", url: "nature" },
  { name: "도시 사진", url: "city" },
  { name: "음식 사진", url: "food" },
  { name: "하늘 사진", url: "sky" },
  { name: "일상 사진", url: "daily" },
];

const UnsplashTag = ({ onSearch }) => {
  const [activeTag, setActiveTag] = React.useState("");
  function btnClick(e) {
    const clickedTag = unsplashTage.find(
      (tag) => tag.name === e.target.innerText
    );
    if (clickedTag) {
      setActiveTag(clickedTag.name);
      onSearch(clickedTag.url);
    }
  }
  return (
    <div className={`${style.unsplash__tag} container`}>
      <ul>
        {unsplashTage.map((tag, index) => (
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

export default UnsplashTag;