import { getKakaoToken, getKakaoInfo } from "@store/ducks/auth/authThunk";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const KakaoRedirectHandler = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { kakaoToken, kakaoEmail } = useSelector(({ auth }) => ({
    kakaoToken: auth.kakaoToken,
    kakaoEmail: auth.kakaoEmail
  }));
  useEffect(() => {
    if (kakaoEmail) navigate("/");
    let params = new URL(document.location.toString()).searchParams;
    let code = params.get("code");
    if (!kakaoToken) dispatch(getKakaoToken(code));
    else dispatch(getKakaoInfo(kakaoToken));
  }, [kakaoToken, kakaoEmail]);
  return <div>단지 로딩.</div>;
};
export default KakaoRedirectHandler;
