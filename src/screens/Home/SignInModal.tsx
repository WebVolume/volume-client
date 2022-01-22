import React from "react";
import "./SignInModal.scss";

const SignInModal = (props: any) => {
  return (
    <div className="signin-dimmer" onClick={props.handleSignInModalVisible}>
      <div className="modal-container" onClick={e => e.stopPropagation()}>
        <h1 className="modal-container__login-title ">Login</h1>
        <div className="login-form">
          <input
            type="text"
            className="login-form__email-input"
            placeholder=" 이메일을 입력해주세요."
          />
          <input
            type="password"
            className="login-form__password-input"
            placeholder=" 비밀번호를 입력해주세요."
          />
          <div className="login-form__message">아이디 또는 비밀번호가 달라요.</div>
          <button className="login-form__continue-btn modal-container__continue-btn">
            계속
          </button>
        </div>
        <div className="signup-wrapper">
          <button className="signup-wrapper__find-account-btn">이메일,비밀번호찾기</button>
          <button className="signup-wrapper__signup-btn ">회원가입하기</button>
        </div>
        <p className="modal-container__or">또는</p>
        <div className="simple-login-form">
          간편로그인
          <button className="simple-login-form__google-login-btn ">
            구글로 시작하기
          </button>
          <button className="simple-login-form__kakao-login-btn ">
            카카오톡으로 시작하기
          </button>
        </div>
      </div>
    </div >
  );
};

export default SignInModal;
