import React, { useState, useRef } from "react";
import "./SignUpModal.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@store/index";
import { checkIdDuplication, signUp } from "@store/ducks/auth/authThunk";

const SignUpModal = (props: any) => {
  const dispatch = useDispatch();
  const usableId = useSelector(({ auth }: RootState) => auth.usableId);
  const [usablePassword, setUsablePassword] = useState(false);
  const [usablePasswordChk, setUsablePasswordChk] = useState(false);
  const [usableUserName, setUsableUserName] = useState(false);
  const [usableEmail, setUsableEmail] = useState(false);

  const [dupliMsg, setDupliMsg] = useState(false);
  const [passwordMsg, setPasswordMsg] = useState(false);
  const [passwordChkMsg, setPasswordChkMsg] = useState(false);
  const [signUpErrorMsg, setSignUpErrorMsg] = useState("");

  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordChkRef = useRef<HTMLInputElement>(null);
  const userNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState({
    id: "",
    password: "",
    userName: "",
    email: ""
  });

  const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    switch (e.target.name) {
      case "userName":
        validateName();
        break;
      case "email":
        validateEmail();
        break;
      case "password":
      case "passwordChk":
        validatePassword();
        break;
    }
  };

  const handleIdDuplication = async () => {
    await dispatch(checkIdDuplication({ id: form.id }));
    setDupliMsg(true);
  };

  const validatePassword = () => {
    const password = passwordRef.current!.value;
    const passwordChk = passwordChkRef.current!.value;
    if (password.length === 0) {
      setPasswordMsg(false);
    } else {
      const passwordRegex =
        /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;
      if (passwordRegex.test(password)) {
        setUsablePassword(true);
      } else {
        setUsablePassword(false);
      }
      setPasswordMsg(true);
    }

    if (passwordChk.length === 0) {
      setPasswordChkMsg(false);
    } else {
      if (password === passwordChk) {
        setUsablePasswordChk(true);
      } else {
        setUsablePasswordChk(false);
      }
      setPasswordChkMsg(true);
    }
  };

  const validateEmail = () => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (emailRegex.test(emailRef.current!.value)) {
      setUsableEmail(true);
    } else {
      setUsableEmail(false);
    }
  };

  const validateName = () => {
    if (
      userNameRef.current!.value.length >= 2 &&
      userNameRef.current!.value.length <= 5
    ) {
      setUsableUserName(true);
    } else {
      setUsableUserName(false);
    }
  };

  const showMsg = (msgType: Boolean, usableTarget: Boolean) => {
    const prefix = "modal-container__waring-comment fs-14 ";
    if (msgType) {
      if (usableTarget) {
        return prefix + " visible usable";
      } else {
        return prefix + " visible";
      }
    } else {
      return prefix + " notVisible";
    }
  };

  const handleSignUp = () => {
    console.log("버튼 클릭");
    if (!usableId) {
      setSignUpErrorMsg("아이디 중복검사를 해주세요 !");
    } else if (!usablePassword) {
      setSignUpErrorMsg("패스워드를 확인해주세요 !");
    } else if (!usableUserName) {
      setSignUpErrorMsg("이름을 확인해주세요 !");
    } else if (!usableEmail) {
      setSignUpErrorMsg("이메일 형식을 확인해주세요 !");
    } else {
      dispatch(signUp(form));
      setSignUpErrorMsg("");
    }
  };
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
        <a
          onClick={handleIdDuplication}
          className="modal-container__id-duplication-check"
        >
          중복 확인
        </a>
        <input
          name="id"
          type="text"
          className="modal-container__id-input fs-16  modal-box"
          placeholder="아이디"
          onChange={handleForm}
        />
        <p className={showMsg(dupliMsg, usableId)}>
          {usableId ? "사용 가능한 아이디입니다." : "이미 사용중인 아이디에요."}
        </p>
        <input
          name="password"
          type="password"
          className="modal-container__password-input fs-16 modal-box"
          placeholder="비밀번호"
          onChange={handleForm}
          ref={passwordRef}
        />
        <p className={showMsg(passwordMsg, usablePassword)}>
          {usablePassword
            ? "안전한 비밀번호입니다!"
            : "영 대소문자,숫자를 홉합해 8-15로 입력해주세요."}
        </p>
        <input
          name="passwordChk"
          type="password"
          className="modal-container__password-auth-input fs-16 modal-box"
          placeholder="비밀번호 확인"
          onChange={validatePassword}
          ref={passwordChkRef}
        />
        <p
          className={showMsg(
            passwordChkMsg,
            usablePassword && usablePasswordChk
          )}
        >
          {usablePassword
            ? usablePasswordChk
              ? "비밀번호가 일치해요."
              : "비밀번호가 일치하지 않아요."
            : "영 대소문자,숫자를 홉합해 8-15로 입력해주세요."}
        </p>
        <input
          name="userName"
          type="text"
          className="modal-container__name-input fs-16 modal-box"
          placeholder="이름"
          onChange={handleForm}
          ref={userNameRef}
        />
        <input
          name="email"
          type="text"
          className="modal-container__email-input fs-16 modal-box"
          placeholder="이메일"
          onChange={handleForm}
          ref={emailRef}
        />
        <p className="modal-container__waring-comment fs-14">
          {signUpErrorMsg}
        </p>
        <button
          className="modal-container__continue-btn fs-16 modal-box"
          onClick={handleSignUp}
        >
          회원가입 완료
        </button>
      </div>
    </div>
  );
};

export default SignUpModal;
