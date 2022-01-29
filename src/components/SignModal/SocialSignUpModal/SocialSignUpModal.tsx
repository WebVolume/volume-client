import React from "react";
import "./SocialSignUpModal.scss";
const SocialSignUpModal = (props: any) => {
  return (
    <div className="signup-dimmer" onClick={props.handleSignUpModalVisible}>
      <div className="modal-container" onClick={e => e.stopPropagation()}>
        <h1 className="modal-container__signup-title">Sign up</h1>
        <p className="modal-container__sub-title">
          간단한 회원가입을 통해 서비스를 즐겨보세요.
        </p>
        <input
          type="text"
          className="modal-container__id-input"
          placeholder="아이디"
        />
        <input
          type="text"
          className="modal-container__name-input"
          placeholder="이름"
        />
        <input
          type="text"
          className="modal-container__email-input"
          placeholder="이메일"
        />
        <button className="modal-container__continue-btn">계속</button>
      </div>
    </div>
  );
};

export default SocialSignUpModal;
