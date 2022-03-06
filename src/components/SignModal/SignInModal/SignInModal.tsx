import React, { useMemo, useState } from "react";
import "./SignInModal.scss";
import { signIn } from "@store/ducks/auth/authThunk";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@store/index";

const SignInModal = (props: any) => {
  const dispatch = useDispatch();
  const loginError = useSelector(({ auth }: RootState) => auth.error);

  const [form, setForm] = useState({
    id: "",
    password: ""
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const showLoginError = useMemo(() => {
    const prefix = "login-form__message fs-14";
    return loginError ? prefix + "visible" : prefix + " notVisible";
  }, [loginError]);

  return (
    <div
      className="signin-dimmer flex justify-center align-center fc-black noto"
      onClick={props.handleSignInModalVisible}
    >
      <div
        className="modal-container flex column"
        onClick={e => e.stopPropagation()}
      >
        <p className="modal-container__login-title fs-28 w-600 mont-alt">
          Login
        </p>
        <form className="login-form">
          <input
            name="id"
            type="text"
            className="login-form__email-input modal-box fs-16"
            placeholder="이메일"
            onChange={onChange}
          />
          <input
            name="password"
            type="password"
            className="login-form__password-input modal-box fs-16"
            placeholder=" 비밀번호"
            autoComplete="off"
            onChange={onChange}
          />
          <p className={showLoginError}>아이디 또는 비밀번호가 달라요.</p>
          <button
            className="modal-container__continue-btn modal-box fs-16 fc-white"
            onClick={e => {
              e.preventDefault();
              dispatch(signIn(form));
            }}
          >
            로그인하기
          </button>
        </form>
        <div className="find-and-signup-container flex ">
          <button className="find-and-signup-container__find-account-btn modal-box fs-16">
            이메일,비밀번호찾기
          </button>
          <button className="find-and-signup-container__signup-btn modal-box fs-16">
            회원가입하기
          </button>
        </div>
        <p className="modal-container__or flex align-center">또는</p>
        <div className="simple-login-form">
          <p className="simple-login-form__title fs-18">간편로그인</p>
          <button className="simple-login-form__google-login-btn modal-box fs-16">
            구글로 시작하기
          </button>
          <button className="simple-login-form__kakao-login-btn modal-box fs-16">
            카카오톡으로 시작하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignInModal;
