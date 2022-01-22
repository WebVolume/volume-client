import "./SearchBar.scss";
import SearcIconSrc from "@ico/search.png";
import { useState } from "react";
import { Link } from "react-router-dom";

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

      <Link to="/main/search" state={{ query: inputText }}>
        <img
          className="search-icon"
          src={SearcIconSrc}
          alt="검색 돋보기 아이콘"
        />
      </Link>
    </div>
  );
}

export default SearchBar;
