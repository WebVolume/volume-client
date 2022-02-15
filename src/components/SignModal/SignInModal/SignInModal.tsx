import React from "react";
import "./SignInModal.scss";

const SignInModal = (props: any) => {
  return (
    <div
      className="signin-dimmer flex justify-center align-center fc-black noto"
      onClick={props.handleSignInModalVisible}
    >
      <div
        className="modal-container flex column"
        onClick={e => e.stopPropagation()}
      >
        <p className="modal-container__login-title fs-35 w-600 mont-alt">
          Login
        </p>
        <div className="login-form">
          <input
            type="text"
            className="login-form__email-input modal-box fs-16"
            placeholder=" 이메일"
          />
          <input
            type="password"
            className="login-form__password-input modal-box fs-16"
            placeholder=" 비밀번호"
          />
          <p className="login-form__message fs-14">
            아이디 또는 비밀번호가 달라요.
          </p>
          <button className="modal-container__continue-btn modal-box fs-16 fc-white">
            계속
          </button>
        </div>
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
          <p className="fs-18">간편로그인</p>
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
