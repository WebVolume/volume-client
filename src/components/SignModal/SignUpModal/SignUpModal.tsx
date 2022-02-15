import React from "react";
import "./SignUpModal.scss";
const SignUpModal = (props: any) => {
  return (
    <div
      className="signup-dimmer flex justify-center align-center noto"
      onClick={props.handleSignUpModalVisible}
    >
      <div
        className="modal-container flex column"
        onClick={e => e.stopPropagation()}
      >
        <h1 className="modal-container__signup-title fs-28 w-600 fc-black mont-alt">
          Sign up
        </h1>
        <a className="modal-container__id-duplication-check">중복 확인</a>
        <input
          type="text"
          className="modal-container__id-input fs-16  modal-box"
          placeholder="아이디"
        />

        <p className="modal-container__waring-comment fs-14">
          이미 사용중인 아이디에요.
        </p>
        <input
          type="password"
          className="modal-container__password-input fs-16 modal-box"
          placeholder="비밀번호"
        />
        <p className="modal-container__waring-comment fs-14">
          영 대소문자,숫자를 홉합해 8-15로 입력해주세요.
        </p>
        <input
          type="password"
          className="modal-container__password-auth-input fs-16 modal-box"
          placeholder="비밀번호 확인"
        />
        <p className="modal-container__waring-comment fs-14">
          비밀번호가 일치하지 않아요.
        </p>
        <input
          type="text"
          className="modal-container__name-input fs-16 modal-box"
          placeholder="이름"
        />
        <input
          type="text"
          className="modal-container__email-input fs-16 modal-box"
          placeholder="이메일"
        />
        <button className="modal-container__continue-btn modal-box">
          회원가입 완료
        </button>
      </div>
    </div>
  );
};

export default SignUpModal;
