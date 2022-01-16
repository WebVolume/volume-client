import React from "react";
import "./SignUpModal.scss";
const SignUpModal = (props: any) => {
  return (
    <div className="SignUp" onClick={props.handleSignUpModalVisible}>
      <div className="modalContainer" onClick={e => e.stopPropagation()}>
        <h1 className="signUpTitle">Sign up</h1>
        <input
          type="text"
          className="emailInput"
          placeholder="이메일을 입력해주세요."
        />
        <input
          type="text"
          className="emailAuthInput"
          placeholder="이메일 인증코드를 입력해주세요"
        />

        <hr />
        <input
          type="password"
          className="passwordInput"
          placeholder="비밀번호를 입력해주세요"
        />
        <input
          type="password"
          className="passwordAuthInput"
          placeholder="다시 비밀번호를 입력해주세요"
        />
        <hr />
        <div className="continueBtn btn">
          <p>계속</p>
        </div>
      </div>
    </div>
  );
};

export default SignUpModal;
