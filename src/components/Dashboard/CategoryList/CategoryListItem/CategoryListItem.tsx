import React, { useMemo } from "react";
import "./CategoryListItem.scss";
import PlayBtn from "@ico/play-none-radius.svg";
import DummyAlbunmArt from "@images/dummys/dummy-album-art-big.png";
import { v4 as uuidv4 } from "uuid";
import { Colors } from "@constants/index";

function CategoryListItem() {
  const randomBgColor = useMemo(() => {
    const { PlayList } = Colors;
    const randomColorlistLength = PlayList.length;

    const randomNum = Math.floor(Math.random() * (randomColorlistLength - 1));

    return {
      backgroundColor: PlayList[randomNum]
    };
  }, []);

  return (
    <div className="category-list-item">
      <div
        className="playlist-info-wrapper flex column align-center"
        style={randomBgColor}
      >
        <img
          className="playlist-album-art"
          src={DummyAlbunmArt}
          alt="앨범아트"
        />

        {/*  */}
        <div className="playlist-info-detail flex align-center justify-space-between">
          <div className="info-wrapper">
            <p className="play-list--title ellipsis w-600 mont-alt">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
            </p>

            <ul className="hashtag-list flex">
              {[1, 2].map(() => (
                <li key={uuidv4()} className="hashtag-list-item noto">
                  # 강렬한
                </li>
              ))}
            </ul>
          </div>

          {/* Todo: 플레이리스트 props 로 받아서 데이터 바인딩 */}
          <a
            className="play-button inline-block"
            href="#"
            title="플레이리스트 타이틀"
          >
            <img className="play-button-img" src={PlayBtn} alt="재생버튼" />
          </a>
        </div>
      </div>

      {/*  */}
      <div className="info-description-wrapper flex justify-space-between">
        <span className="playlist-title ellipsis inline-block noto">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet quod
          recusandae provident velit laborum repellat enim dolores at a sed
          deleniti, doloribus distinctio obcaecati quos in eos odio nam nihil!
        </span>
        <span className="playlist-count noto">+999</span>
      </div>
    </div>
  );
}

export default CategoryListItem;
