import { signUp } from "@store/ducks/auth/authThunk";
import { RootState } from "@store/index";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./SocialSignUpModal.scss";

const SocialSignUpModal = (props: any) => {
  const { kakaoEmail, duplicateError } = useSelector(({ auth }: RootState) => ({
    kakaoEmail: auth.kakaoEmail,
    duplicateError: auth.error
  }));
  const dispatch = useDispatch();
  const [formEmptyError, setFormEmptyErrorVisible] = useState(false);

  const [form, setForm] = useState({
    id: "",
    username: "",
    email: kakaoEmail,
    kakao: true
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const showEmptyError = useMemo(() => {
    const prefix = "social-modal-container__empty-msg fs-14";
    return formEmptyError ? prefix + "visible" : prefix + " notVisible";
  }, [formEmptyError]);

  const submitSignUp = () => {
    if (!form.id || !form.username) {
      setFormEmptyErrorVisible(true);
    } else {
      dispatch(signUp(form));
    }
  };

  useEffect(() => {
    if (duplicateError)
      alert("이미 가입된 아이디가 존재합니다! 다른 아이디를 입력해주세요");
  }, [duplicateError]);

  return (
    <div
      className="signup-dimmer flex align-center justify-center fc-black noto"
      onClick={props.handleSocialSignUpVisible}
    >
      <div
        className="modal-container social-modal-container"
        onClick={e => e.stopPropagation()}
      >
        <h1 className="social-modal-container__signup-title fs-28 w-600 mont-alt">
          Sign up
        </h1>
        <p className="social-modal-container__sub-title fs-14">
          간단한 회원가입을 통해 서비스를 즐겨보세요.
        </p>
        <input
          type="text"
          name="id"
          className="social-modal-container__id-input modal-box fs-18"
          placeholder="아이디"
          onChange={onChange}
        />
        <p className={showEmptyError}>아이디와 이름을 모두 입력해주세요</p>
        <input
          type="text"
          name="username"
          className="social-modal-container__name-input modal-box fs-18"
          placeholder="이름"
          onChange={onChange}
        />
        <input
          type="text"
          className="social-modal-container__email-input modal-box fs-18"
          placeholder="이메일"
          value={`${kakaoEmail}`}
          readOnly
        />

        <button
          className="modal-container__continue-btn fs-16 fc-white modal-box"
          onClick={submitSignUp}
        >
          로그인 하기
        </button>
      </div>
    </div>
  );
};

export default SocialSignUpModal;
