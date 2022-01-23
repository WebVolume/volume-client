import FolderIcoSrc from "@ico/folder.png";
import MypageIcoSrc from "@ico/people.png";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import "./TopNav.scss";

function TopNav() {
  return (
    <>
      <nav className="top-nav">
        <a href="/" className="logo mont w-600 fs-30">
          Volume
        </a>

        {/*  */}
        <ul className="nav-list flex">
          <li className="nav-list--item">
            <SearchBar />
          </li>

          <li className="nav-list--item">
            <Link to="/main/library">
              <img
                className="nav-list--item_ico"
                src={FolderIcoSrc}
                alt="폴더 아이콘 이미지"
              />
            </Link>
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
