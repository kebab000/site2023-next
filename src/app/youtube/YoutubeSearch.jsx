import React, {useRef} from 'react';
import style from "./page.module.scss"

const YoutubeSearch = ({ onSearch }) => {
  const  inputRef = useRef();

  const handleSearch = ()=> {
    const value = inputRef.current.value;
    onSearch(value);

  }
  const onKeyPress = (event)=>{
    if(event.key === 'Enter'){
      handleSearch();
    }
  }
  const onClick = ()=>{
    handleSearch();
  }
  return (
    <div className={style.youtube__search}>
     <h2 className="blind">검색하기</h2>
      <input
        ref={inputRef}
        type="search"
        onKeyPress={onKeyPress}
        placeholder="동영상을 검색하세요!"
      />
      <button type="submit" onClick={onClick}>
        검색하기
      </button>
    </div>
  )
}

export default YoutubeSearch