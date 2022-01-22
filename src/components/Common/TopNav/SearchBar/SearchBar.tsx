import "./SearchBar.scss";
import SearcIconSrc from "@ico/search.png";
import { useState } from "react";

function SearchBar() {
  const [inputText, setInputText] = useState("");

  return (
    <div className="search-bar flex">
      <div className="input-wrapper">
        <input
          type="text"
          onChange={({ target }) => setInputText(target.value)}
        />
      </div>

      <a href="#">
        <img
          className="search-icon"
          src={SearcIconSrc}
          alt="검색 돋보기 아이콘"
        />
      </a>
    </div>
  );
}

export default SearchBar;
