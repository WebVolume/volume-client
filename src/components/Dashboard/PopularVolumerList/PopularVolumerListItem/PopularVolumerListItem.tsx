import VolumerPlaylist from "./VolumerPlaylist";
import DummyProfile from "@images/dummys/dummy-profile.jpeg";
import PeopleSvg from "@images/ico/mypage.svg";
import PeoplePlusSvg from "@images/ico/people_plus.svg";
import "./PopularVolumerListItem.scss";
import { useMemo } from "react";

function PopularVolumerListItem() {
  const isActiveFollow = false;

  const followBtnClassName = useMemo(() => {
    const classPrefix = "follow-button flex align-center justify-center";

    return isActiveFollow ? classPrefix + " active" : classPrefix;
  }, [isActiveFollow]);

  return (
    <div className="popular-volumer-list-item flex column align-center">
      <div className="volumer-info flex column align-center">
        <span className="volumer-info--name inline-block mont-alt fs-18">
          Dummy Name
        </span>
        <img
          className="volumer-info--profile"
          src={DummyProfile}
          alt="프로필 이미지"
        />

        {/*  */}
        <div className="volumer-info--detail flex">
          <div className="detail-item-wrapper flex align-center">
            <img
              className="detail-item-icon"
              src={PeopleSvg}
              alt="팔로워 수 아이콘"
            />
            <span className="detail-item-number mont w-500">999+</span>
          </div>

          <div className="detail-item-wrapper flex align-center">
            <img
              className="detail-item-icon"
              src={PeopleSvg}
              alt="음악 아이콘"
            />
            <span className="detail-item-number mont w-500">999+</span>
          </div>
        </div>

        {/*  */}
        <a href="#" className={followBtnClassName}>
          {isActiveFollow ? (
            <>
              <img
                className="follow-button--ico"
                src={PeoplePlusSvg}
                alt="팔로우 버튼 아이콘"
              />
              <span className="mont fs-16 w-500">팔로우</span>
            </>
          ) : (
            <span className="mont fs-16 w-500">팔로우 취소</span>
          )}
        </a>
      </div>

      <VolumerPlaylist />
    </div>
  );
}

export default PopularVolumerListItem;
