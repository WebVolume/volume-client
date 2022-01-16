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
    < div className="homeContainer" >
      {signInModalVisible && <SignInModal handleSignInModalVisible={handleSignInModalVisible} />}
      {signUpModalVisible && <SignUpModal handleSignUpModalVisible={handleSignUpModalVisible} />}
      <header className="headerContainer">
        <div className="logoTitle">Volume</div>
        <div className="signUpBtn btn" onClick={handleSignUpModalVisible}>Sign up</div>
        <div className="signInBtn btn" onClick={handleSignInModalVisible}>Sign in</div>
      </header>
      <main className="mainContainer">
        <div className="logoTitle">Volume</div>
        <img className="logoImg" src={logoImg} alt='로고이미지' />
        <div className="signUpBtn btn" onClick={handleSignUpModalVisible}><p>Sign Up</p></div>
      </main>
    </div>
  );
}

export default Home;
