import React from "react";
import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";
import { auth } from "../services/firebase.config";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const Welcome = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  return (
    <main className="welcome">
      <h2>Welcome to Cherry.</h2>
      <img src="/cherry-logo.png" alt="ReactJs logo" width={100} height={100} />
      <p>Click below to sign-in with Google to your real-time personal assistant.</p>
      <button className="sign-in">
        <img
          onClick={googleSignIn}
          src={GoogleSignin}
          alt="sign in with google"
          type="button"
        />
      </button>
    </main>
  );
};

export default Welcome;