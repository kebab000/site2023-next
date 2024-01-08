import React from "react";
import style from "./page.module.scss"

const youtubeTag = [
  { name: "웹개발" },
  { name: "프론트엔드" },
  { name: "백엔드" },
  { name: "코딩애플" },
  { name: "JavascriptMaster" },
];

const YoutubeTag = ({ onSearch }) => {
  const [activeTag, setActiveTag] = React.useState("");
  function btnClick(e) {
    setActiveTag(e.target.innerText);
    onSearch(e.target.innerText);
  }
  return (
    <div className={style.youtube__tag}>
      <ul>
        {youtubeTag.map((tag, index) => (
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

export default YoutubeTag;