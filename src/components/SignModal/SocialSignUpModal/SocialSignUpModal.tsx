import React from "react";
import "./SocialSignUpModal.scss";
const SocialSignUpModal = (props: any) => {
  return (
    <div
      className="signup-dimmer flex align-center justify-center fc-black noto"
      onClick={props.handleSignUpModalVisible}
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
          className="social-modal-container__id-input modal-box fs-18"
          placeholder="아이디"
        />
        <input
          type="text"
          className="social-modal-container__name-input modal-box fs-18"
          placeholder="이름"
        />
        <input
          type="text"
          className="social-modal-container__email-input modal-box fs-18"
          placeholder="이메일"
        />
        <button className="modal-container__continue-btn fs-16 fc-white modal-box">
          로그인 하기
        </button>
      </div>
    </div>
  );
};

export default SocialSignUpModal;
