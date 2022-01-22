import SearchBar from "./SearchBar";
import "./TopNav.scss";

import FolderIcoSrc from "@ico/folder.png";
import MypageIcoSrc from "@ico/people.png";

function TopNav() {
  return (
    <>
      <nav className="top-nav">
        <a href="/" className="logo mont-600 fs-30">
          Volume
        </a>

        {/*  */}
        <ul className="nav-list flex">
          <li className="nav-list--item">
            <SearchBar />
          </li>

          <li className="nav-list--item">
            <a href="/some">
              <img
                className="nav-list--item_ico"
                src={FolderIcoSrc}
                alt="폴더 아이콘 이미지"
              />
            </a>
          </li>

          <li className="nav-list--item">
            <a href="/some">
              <img
                className="nav-list--item_ico"
                src={MypageIcoSrc}
                alt="사람 아이콘 이미지"
              />
            </a>
          </li>
        </ul>
      </nav>
      <div className="empty-top-bar"></div>
    </>
  );
}

export default TopNav;
