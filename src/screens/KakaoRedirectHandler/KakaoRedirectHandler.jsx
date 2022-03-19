import { getKakaoToken } from "@store/ducks/auth/authThunk";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./KakaoRedirectHandler.scss";
import loadingSpinner from "@ico/loadingSpinner.svg";

const KakaoRedirectHandler = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { kakaoEmail, userInfo } = useSelector(({ auth }) => ({
    kakaoEmail: auth.kakaoEmail,
    userInfo: auth.userInfo
  }));

  useEffect(() => {
    if (userInfo || kakaoEmail) {
      navigate("/");
    }
  }, [userInfo, kakaoEmail]);

  useEffect(() => {
    let params = new URL(document.location.toString()).searchParams;
    let code = params.get("code");
    dispatch(getKakaoToken(code));
  }, []);

  return (
    <div className="kakao-redirect flex justify-center align-center">
      <div className="kakao-redirect__dimmer"></div>
      <img
        src={loadingSpinner}
        title="로딩스피너"
        alt="로딩스피너"
        className="kakao-redirect__loading-spinner"
      ></img>
    </div>
  );
};
export default KakaoRedirectHandler;
