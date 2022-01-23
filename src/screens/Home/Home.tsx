import "./Home.scss";
import logoImg from "../../assets/images/volume.png";
import { useState } from 'react';
import SignInModal from './SignInModal';
import SignUpModal from './SignUpModal';


function Home() {

  const [signInModalVisible, setsingInModalVisible] = useState(false);
  const [signUpModalVisible, setsingUpModalVisible] = useState(false);
  const handleSignInModalVisible = () => {
    setsingInModalVisible(!signInModalVisible)
  }
  const handleSignUpModalVisible = () => {
    setsingUpModalVisible(!signUpModalVisible)
  }
  return (
    < div className="home-wrapper" >
      {signInModalVisible && <SignInModal handleSignInModalVisible={handleSignInModalVisible} />}
      {signUpModalVisible && <SignUpModal handleSignUpModalVisible={handleSignUpModalVisible} />}
      <header className="header-container">
        <p className="header-container__logo-title">Volume</p>
        <button className="header-container__signup-btn btn" onClick={handleSignUpModalVisible}>Sign up</button>
        <button className="header-container__signin-btn btn" onClick={handleSignInModalVisible}>Sign in</button>
      </header>
      <main className="main-container">
        <p className="main-container__logo-title">Volume</p>
        <img className="main-container__logo-img" src={logoImg} alt='로고이미지' />
        <button className="main-container__signup-btn btn" onClick={handleSignUpModalVisible}><p>Sign Up</p></button>
      </main>
    </div>
  );
}

export default Home;
