import React from "react";
import "./SignInModal.scss";

const SignInModal = (props: any) => {
  return (
    <div className="SignIn" onClick={props.handleSignInModalVisible}>
      <div className="modalContainer" onClick={e => e.stopPropagation()}>
        <h1 className="loginTitle">Login</h1>
        <div className="loginContainer">
          <input
            type="text"
            className="emailInput loginInput"
            placeholder=" 이메일을 입력해주세요."
          />
          <input
            type="password"
            className="passwordInput loginInput"
            placeholder=" 비밀번호를 입력해주세요."
          />
          <div className="continueBtn btn">
            <p>계속</p>
          </div>
          <div className="signUpContainer">
            <div className="findAccountBtn btn">이메일,비밀번호찾기</div>
            <div className="signUpBtn btn">회원가입하기</div>
          </div>
        </div>
        <div className="or">또는</div>
        <div className="simpleLoginContainer">
          <p>간편로그인</p>
          <div className="googleLoginBtn btn">
            <p>구글로 시작하기</p>
          </div>
          <div className="kakaoLoginBtn btn">
            <p>카카오톡으로 시작하기</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInModal;
